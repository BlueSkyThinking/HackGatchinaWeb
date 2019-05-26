export interface GEvent {
    name: string;
    description: string;
    eventSections: Array<Section>;
    price: number;
    participantEmails: Array<string>;
    ownerEmail: string;
    time: number;
    imgUrl: string;
    maxCountParticipants: number;
}

export enum Section {
    Walk = 'Прогулки',
    Run = 'Бег',
}
