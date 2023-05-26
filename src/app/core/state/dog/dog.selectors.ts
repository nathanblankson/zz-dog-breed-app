import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DogState } from './dog.state';

export const selectDog = createFeatureSelector<DogState>('dog');

export const selectDogsList = createSelector(
    selectDog,
    (state: DogState) => state.dogsList
);

export const selectDogListItemByBreedKey = (props: { breedKey: string }) =>
    createSelector(selectDogsList, (dogsList) => dogsList.find((dog) => dog.breedKey === props.breedKey));

export const selectDogDetails = createSelector(
    selectDog,
    (state: DogState) => state.dogDetails
);

export const selectDogDetailsByBreedKey = (props: { breedKey: string }) =>
    createSelector(selectDogDetails, (dogDetails) => dogDetails[props.breedKey]);
