export interface Profile {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    interests: Array<Interest>;
    about: string;
}

export enum Interest {
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
