import { Dog } from '../../../models/dog.interface';

export interface DogState {
    dogsList: Partial<Dog>[];
    dogDetails: {
        [breedKey: string]: Dog;
    };
}

export const initialState: DogState = {
    dogsList: [],
    dogDetails: {},
}
