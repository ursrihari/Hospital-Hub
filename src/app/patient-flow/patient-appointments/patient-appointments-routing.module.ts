import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAppointmentsPage } from './patient-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: PatientAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAppointmentsPageRoutingModule {}
