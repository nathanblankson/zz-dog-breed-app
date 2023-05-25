import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { DogService } from '../../services/dog/dog.service';

import * as DogActions from './dog.actions';

@Injectable()
export class DogEffects {

    constructor(
        private actions$: Actions<any>,
        private dogService: DogService,
    ) {}

    fetchDogs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DogActions.appLoaded.type, DogActions.getAllDogs),
            switchMap(() =>
                this.dogService.getAllDogs().pipe(
                    map((dogsList) =>
                        DogActions.getAllDogsSuccess({ dogsList })
                    ),
                    catchError((error) =>
                        of(DogActions.getAllDogsFailed())
                    )
                )
            )
        )
    );
}
