import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentCancelPage } from './appointment-cancel.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentCancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentCancelPageRoutingModule {}
