import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentHelpPage } from './appointment-help.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentHelpPageRoutingModule {}
