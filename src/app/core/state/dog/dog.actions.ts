import { createAction, props } from '@ngrx/store';

import { Dog } from '../../../models/dog.interface';

export const appLoaded = createAction(
    "[App] App Loaded"
);

export const getAllDogs = createAction(
    '[Dog API] Get All Dogs'
);

export const getAllDogsSuccess = createAction(
    '[Dog API] Get All Dogs Success',
    props<{ dogsList: Partial<Dog>[] }>()
);


export const getAllDogsFailed = createAction(
    '[Dog API] Get All Dogs Failed'
);


export const getDogDetails = createAction(
    '[Dog API] Get Dog Details',
    props<{ breedKey: string }>()
);

export const getDogDetailsSuccess = createAction(
    '[Dog API] Get Dog Details Success',
    props<{ dogDetails: Dog }>()
);


export const getDogDetailsFailed = createAction(
    '[Dog API] Get Dog Details Failed'
);
