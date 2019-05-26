import { Component, OnDestroy } from '@angular/core';
import { EventParameters } from '../../types/EventParameters';
import { Section } from '../../types/GEvent';
import { EventService } from '../../service/event.service';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectUser } from '../../../authorization/selectors/selectUser';

@Component({
    selector: 'app-add-event-page-container',
    template: `
        <app-add-event-page
            [parameters]="parameters"
            (create)="handleCreate()"
            (onchange)="handleChange($event)"
        ></app-add-event-page>
    `,
    styles: [
        `
            :host {
                overflow: hidden;
            }
        `,
    ],
})
export class AddEventPageContainerComponent implements OnDestroy {
    public parameters: EventParameters = {
        description: '',
        eventSections: [],
        imgUrl: '',
        name: '',
        ownerEmail: '',
        price: 0,
        time: 0,
        maxCountParticipants: 0,
    };

    private userEmailSubscription: Subscription;

    constructor(
        public readonly eventService: EventService,
        public readonly store: Store<AppState>
    ) {
        this.userEmailSubscription = this.store
            .pipe(select(selectUser))
            .subscribe(
                user =>
                    (this.parameters = {
                        ...this.parameters,
                        ownerEmail: user.email,
                    })
            );
    }

    public handleChange(parameters: EventParameters) {
        this.parameters = parameters;
        console.log(this.parameters);
    }

    public handleCreate() {
        this.eventService.createOrUpdateEvent(this.parameters);
    }

    public ngOnDestroy(): void {
        this.userEmailSubscription.unsubscribe();
    }
}
