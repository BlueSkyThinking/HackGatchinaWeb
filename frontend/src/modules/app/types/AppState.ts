import { UserState } from '../../authorization/types/UserState';
import { EventState } from './EventState';

export interface AppState {
    userState: UserState;
    eventState: EventState;
}
