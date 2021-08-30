import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadAboutHealthPage } from './read-about-health.page';

const routes: Routes = [
  {
    path: '',
    component: ReadAboutHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadAboutHealthPageRoutingModule {}
