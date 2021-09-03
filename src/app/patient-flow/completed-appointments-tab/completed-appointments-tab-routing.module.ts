import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedAppointmentsTabPage } from './completed-appointments-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedAppointmentsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedAppointmentsTabPageRoutingModule {}
