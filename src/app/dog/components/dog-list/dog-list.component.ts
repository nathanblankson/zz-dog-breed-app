import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { selectDogsList } from '../../../core/state/dog';
import { Dog } from '../../../models/dog.interface';

@Component({
    selector: 'app-dog-list',
    templateUrl: './dog-list.component.html',
    styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {

    public dogsList$ = this.store.select(selectDogsList);

    constructor(
        private store: Store,
        private router: Router,
    ) {}

    public onClickDog(dog: Partial<Dog>): void {
        this.router.navigate(['/dog-breeds', dog.breedKey]);
    }
}
