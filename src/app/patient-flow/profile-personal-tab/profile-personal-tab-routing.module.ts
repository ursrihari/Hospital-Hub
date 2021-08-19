import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePersonalTabPage } from './profile-personal-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePersonalTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePersonalTabPageRoutingModule {}
