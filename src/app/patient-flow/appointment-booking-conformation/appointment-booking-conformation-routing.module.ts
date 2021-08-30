import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentBookingConformationPage } from './appointment-booking-conformation.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentBookingConformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentBookingConformationPageRoutingModule {}
