import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientHospitalsListPage } from './patient-hospitals-list.page';

const routes: Routes = [
  {
    path: '',
    component: PatientHospitalsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientHospitalsListPageRoutingModule {}
