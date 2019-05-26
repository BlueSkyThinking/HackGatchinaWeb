import { createSelector } from '@ngrx/store';
import { AppState } from '../types/AppState';

export const selectEvents = createSelector(
    (state: AppState) => state,
    state => state.eventState.events
);
