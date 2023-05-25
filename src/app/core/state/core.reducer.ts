import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { State } from './core.state';

import * as DogReducer from './dog/dog.reducer';

export const reducers: ActionReducerMap<State> = {
    dog: DogReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
