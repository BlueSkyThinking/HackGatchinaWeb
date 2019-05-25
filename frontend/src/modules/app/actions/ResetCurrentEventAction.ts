import { Action } from '@ngrx/store';

export class ResetCurrentEventAction implements Action {
    public static readonly type = '[Event] Reset current event';

    public readonly type = ResetCurrentEventAction.type;
}
