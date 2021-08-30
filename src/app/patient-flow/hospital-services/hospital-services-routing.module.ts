import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalServicesPage } from './hospital-services.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalServicesPageRoutingModule {}
