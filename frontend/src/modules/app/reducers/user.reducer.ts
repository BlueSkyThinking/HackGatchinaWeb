import { SetUserAction } from '../../authorization/actions/SetUserAction';
import { UserState } from '../../authorization/types/UserState';
import { ResetUserAction } from '../../authorization/actions/ResetUserAction';

const initialState: UserState = {
    user: null,
};

type Action = SetUserAction | ResetUserAction;

export function userReducer(
    state: UserState = initialState,
    action: Action
): UserState {
    switch (action.type) {
        case SetUserAction.type:
            return {
                ...state,
                user: action.payload,
            };

        case ResetUserAction.type:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
}
