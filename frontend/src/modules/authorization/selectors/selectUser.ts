import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectUser = createSelector(
    (state: AppState) => state,
    state => state.userState.user
);
