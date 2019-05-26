import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GEvent } from '../../types/GEvent';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentEvent } from '../../selectors/selectCurrentEvent';

@Component({
    selector: 'app-event-page-container',
    template: `
        <app-event-page [event]="currentEvent$ | async"></app-event-page>
    `,
    styles: [],
})
export class EventPageContainerComponent {
    public currentEvent$: Observable<GEvent>;

    constructor(private store: Store<AppState>) {
        this.currentEvent$ = this.store.pipe(select(selectCurrentEvent));
    }
}
