import { Component, Input, OnDestroy } from '@angular/core';
import { GEvent } from '../../types/GEvent';
import { EventService } from '../../service/event.service';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectUser } from '../../../authorization/selectors/selectUser';

@Component({
    selector: 'app-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnDestroy {
    @Input() public event: GEvent;

    public email: string;

    private userSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly eventService: EventService
    ) {
        this.userSubscription = this.store
            .pipe(select(selectUser))
            .subscribe(user => (this.email = user.email));
    }

    public get style() {
        return {
            backgroundImage: `url(${this.event.imgUrl})`,
        };
    }

    public handleParticipate() {
        this.eventService.toggleEventSubscribe(this.event);
    }

    public isParticipant() {
        return this.eventService.inParticipants(this.event, this.email);
    }

    public ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
