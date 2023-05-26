import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'dog-breeds',
        loadChildren: () => import('./dog/dog.module').then(m => m.DogModule),
    },
    // {
    //     path: '',
    //     redirectTo: 'dog-breeds',
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
