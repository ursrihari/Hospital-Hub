import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAppointmentBookingPage } from './patient-appointment-booking.page';

const routes: Routes = [
  {
    path: '',
    component: PatientAppointmentBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAppointmentBookingPageRoutingModule {}
