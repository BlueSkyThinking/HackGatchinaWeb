import { GEvent } from './GEvent';

export interface EventState {
    events: GEvent[];
    currentEvent: GEvent | null;
}
