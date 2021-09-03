import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcommingAppointmentsTabPage } from './upcomming-appointments-tab.page';

const routes: Routes = [
  {
    path: '',
    component: UpcommingAppointmentsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcommingAppointmentsTabPageRoutingModule {}
