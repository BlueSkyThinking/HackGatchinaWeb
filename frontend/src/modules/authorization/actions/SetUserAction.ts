import { Action } from '@ngrx/store';
import { User } from '../types/User';

export class SetUserAction implements Action {
    public static readonly type = '[User] Set user';

    public readonly type = SetUserAction.type;

    constructor(public readonly payload: User) {}
}
