import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthCheckupPage } from './health-checkup.page';

const routes: Routes = [
  {
    path: '',
    component: HealthCheckupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCheckupPageRoutingModule {}
