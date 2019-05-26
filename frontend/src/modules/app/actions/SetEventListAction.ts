import { GEvent } from '../types/GEvent';
import { Action } from '@ngrx/store';

export class SetEventListAction implements Action {
    public static readonly type = '[Event] Set event list';

    public readonly type = SetEventListAction.type;

    constructor(public readonly payload: GEvent[]) {}
}
