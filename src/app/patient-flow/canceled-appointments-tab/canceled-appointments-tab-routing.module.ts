import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanceledAppointmentsTabPage } from './canceled-appointments-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CanceledAppointmentsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanceledAppointmentsTabPageRoutingModule {}
