import { createSelector } from '@ngrx/store';
import { AppState } from '../types/AppState';

export const selectCurrentEvent = createSelector(
    (state: AppState) => state.eventState,
    eventState => eventState.currentEvent
);
