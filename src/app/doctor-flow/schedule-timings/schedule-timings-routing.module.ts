import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleTimingsPage } from './schedule-timings.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleTimingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleTimingsPageRoutingModule {}
