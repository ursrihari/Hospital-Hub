import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistProfilePage } from './receptionist-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionistProfilePageRoutingModule {}
