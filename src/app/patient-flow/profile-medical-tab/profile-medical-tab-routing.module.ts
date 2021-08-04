import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMedicalTabPage } from './profile-medical-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMedicalTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMedicalTabPageRoutingModule {}
