import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientFavouritesPage } from './patient-favourites.page';

const routes: Routes = [
  {
    path: '',
    component: PatientFavouritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientFavouritesPageRoutingModule {}
