import { Action, createReducer, on } from "@ngrx/store";

import { DogState, initialState } from './dog.state';

import * as DogActions from './dog.actions';

const dogReducer = createReducer(
    initialState,

    on(DogActions.getAllDogsSuccess, (state, { dogsList }) => ({
        ...state,
        dogsList,
    })),

    on(DogActions.getDogDetailsSuccess, (state, { dogDetails }) => ({
        ...state,
        dogDetails: {
            [dogDetails.breed]: dogDetails,
        }
    })),
);

export function reducer(state: DogState | undefined, action: Action) {
    return dogReducer(state, action);
}
