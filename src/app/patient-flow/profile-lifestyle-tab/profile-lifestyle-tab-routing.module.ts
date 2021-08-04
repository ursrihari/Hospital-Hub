import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLifestyleTabPage } from './profile-lifestyle-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileLifestyleTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLifestyleTabPageRoutingModule {}
