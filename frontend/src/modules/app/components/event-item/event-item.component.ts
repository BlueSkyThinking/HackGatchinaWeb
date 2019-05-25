import { Component, Input } from '@angular/core';
import { GEvent } from '../../types/GEvent';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { SetCurrentEventAction } from '../../actions/SetCurrentEventAction';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent {
    @Input() event: GEvent;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {}

    public handleSelect() {
        this.store.dispatch(new SetCurrentEventAction(this.event));
        this.router.navigate(['/home/event']);
    }
}
