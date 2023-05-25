import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { appLoaded, getAllDogs } from './core/state/dog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'zz-dog-breed-app';

    constructor(
        private store: Store,
    ) {}

    public ngOnInit(): void {
        console.log('INIT')

        this.store.dispatch(getAllDogs());
    }
}
