import { Action } from '@ngrx/store';

export class ResetEventListAction implements Action {
    public static readonly type = '[Event] Reset event list';

    public readonly type = ResetEventListAction.type;
}
