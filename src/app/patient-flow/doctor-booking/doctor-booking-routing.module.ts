import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorBookingPage } from './doctor-booking.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorBookingPageRoutingModule {}
