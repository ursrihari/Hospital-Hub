import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareRecordPage } from './share-record.page';

const routes: Routes = [
  {
    path: '',
    component: ShareRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareRecordPageRoutingModule {}
