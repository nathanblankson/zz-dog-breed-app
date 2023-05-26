import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DogRoutingModule } from './dog-routing.module';
import { DogComponent } from './pages/dog/dog.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { DogDetailsComponent } from './pages/dog-details/dog-details.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';

@NgModule({
    declarations: [
        DogComponent,
        DogListComponent,
        DogDetailsComponent,
        DogItemComponent,
    ],
    imports: [
        CommonModule,
        DogRoutingModule,
    ]
})
export class DogModule {}
