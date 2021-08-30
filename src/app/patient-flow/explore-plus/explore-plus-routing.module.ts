import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePlusPage } from './explore-plus.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePlusPageRoutingModule {}
