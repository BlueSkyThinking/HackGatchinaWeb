import { Action } from '@ngrx/store';
import { GEvent } from '../types/GEvent';

export class SetCurrentEventAction implements Action {
    public static readonly type = '[Event] Set current event';

    public readonly type = SetCurrentEventAction.type;

    constructor(public readonly payload: GEvent) {}
}
