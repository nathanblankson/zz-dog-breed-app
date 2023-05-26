import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';

import { getDogDetails, selectDogDetailsByBreedKey } from '../../../core/state/dog';
import { Dog } from '../../../models/dog.interface';

@Component({
    selector: 'app-dog-details',
    templateUrl: './dog-details.component.html',
    styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

    public dogBreedKey$!: Observable<string>;
    public dogDetails$!: Observable<Dog>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store,
    ) {}

    public ngOnInit(): void {
        this.dogBreedKey$ = this.activatedRoute.params.pipe(map((params) => params['breedKey']));

        this.dogBreedKey$.subscribe((breedKey) => {
            this.store.dispatch(getDogDetails({ breedKey }));
        });

        this.dogDetails$ = this.dogBreedKey$.pipe(
            switchMap((breedKey) => this.store.select(selectDogDetailsByBreedKey({ breedKey })))
        );
    }
}
