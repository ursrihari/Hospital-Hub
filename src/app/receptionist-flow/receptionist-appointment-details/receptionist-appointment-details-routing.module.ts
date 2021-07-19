import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistAppointmentDetailsPage } from './receptionist-appointment-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistAppointmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionistAppointmentDetailsPageRoutingModule {}
