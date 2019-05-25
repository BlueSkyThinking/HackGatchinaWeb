export interface GEvent {
    name: string;
    description: string;
    eventSections: Array<Section>;
    price: number;
    participantEmails: Array<string>;
    ownerEmail: string;
    time: Date;
    imgUrl: string;
}

export enum Section {
    Walk = 'Прогулки', Run = 'Бег'
}
