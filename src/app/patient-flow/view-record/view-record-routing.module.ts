import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecordPage } from './view-record.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecordPageRoutingModule {}
