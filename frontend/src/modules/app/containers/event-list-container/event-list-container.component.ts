import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GEvent } from '../../types/GEvent';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { selectEvents } from '../../selectors/selectEvents';

@Component({
    selector: 'app-event-list-container',
    template: `
        <app-event-list [events]="events$ | async"></app-event-list>
    `,
    styles: [],
})
export class EventListContainerComponent {
    public events$: Observable<GEvent[]>;

    constructor(private readonly store: Store<AppState>) {
        this.events$ = this.store.pipe(select(selectEvents));
    }
}
