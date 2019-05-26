import { EventState } from '../types/EventState';
import { SetEventListAction } from '../actions/SetEventListAction';
import { ResetEventListAction } from '../actions/ResetEventListAction';
import { SetCurrentEventAction } from '../actions/SetCurrentEventAction';
import { ResetCurrentEventAction } from '../actions/ResetCurrentEventAction';

const initialState: EventState = {
    events: [],
    currentEvent: null,
};

type Action =
    | SetEventListAction
    | ResetEventListAction
    | SetCurrentEventAction
    | ResetCurrentEventAction;

export function eventReducer(
    state: EventState = initialState,
    action: Action
): EventState {
    switch (action.type) {
        case SetEventListAction.type:
            return {
                ...state,
                events: action.payload.map(event => ({
                    ...event,
                    participantEmails: event.participantEmails
                        ? event.participantEmails
                        : [],
                })),
            };

        case ResetEventListAction.type:
            return {
                ...state,
                events: [],
            };

        case SetCurrentEventAction.type:
            return {
                ...state,
                currentEvent: action.payload,
            };

        case ResetCurrentEventAction.type:
            return {
                ...state,
                currentEvent: null,
            };

        default:
            return state;
    }
}
