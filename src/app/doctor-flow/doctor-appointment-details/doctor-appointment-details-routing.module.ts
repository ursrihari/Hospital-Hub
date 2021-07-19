import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorAppointmentDetailsPage } from './doctor-appointment-details.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorAppointmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorAppointmentDetailsPageRoutingModule {}
