export interface Profile {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    interests: Array<Interest>;
    about: string;
}

export enum Interest {
    Walk = 'Прогулки', Run = 'Бег'
}
