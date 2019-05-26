import { createSelector } from '@ngrx/store';
import { selectUser } from './selectUser';

export const selectUserName = createSelector(
    selectUser,
    userState => userState ? `${userState.firstName} ${userState.lastName}`  : 'Unknown'
);
