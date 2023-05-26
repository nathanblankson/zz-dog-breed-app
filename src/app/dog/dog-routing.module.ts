import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogComponent } from './pages/dog/dog.component';
import { DogDetailsComponent } from './pages/dog-details/dog-details.component';

const routes: Routes = [
    {
        path: '',
        component: DogComponent,
    },
    {
        path: ':breedKey',
        component: DogDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DogRoutingModule {}
