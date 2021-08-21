import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalSpecialitiesPage } from './hospital-specialities.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalSpecialitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalSpecialitiesPageRoutingModule {}
