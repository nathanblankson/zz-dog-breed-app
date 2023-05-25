import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './core/state';
import { DogEffects } from './core/state/dog';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
        }),
        EffectsModule.forRoot([
            DogEffects
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: true,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
