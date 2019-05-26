import { Section } from './GEvent';

export interface EventParameters {
    description: string;
    eventSections: Section[];
    imgUrl: string;
    name: string;
    ownerEmail: string;
    price: number;
    time: number;
    maxCountParticipants: number;
}
