import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistHomePage } from './receptionist-home.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionistHomePageRoutingModule {}
