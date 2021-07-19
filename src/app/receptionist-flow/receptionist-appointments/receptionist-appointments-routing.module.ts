import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistAppointmentsPage } from './receptionist-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionistAppointmentsPageRoutingModule {}
