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
    ARCHITECTURE = 'Архитектура',
    CINEMA = 'Кино',
    PAINTING = 'Живопись',
    COWORKING = 'Коворкинг',
    PARK = 'Парк',
    FESTIVAL = 'Фестиваль',
    COFFEE = 'Кофе',
    MUSEUM = 'Музей',
    EVENT = 'Событие',
    NATURE = 'Природа',
    WORKSHOP = 'Семинар',
    PERFOMANCE = 'Спектакль',
    CONCERT = 'Концерт',
    FOOD = 'Еда',
}
