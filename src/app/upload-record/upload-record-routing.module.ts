import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadRecordPage } from './upload-record.page';

const routes: Routes = [
  {
    path: '',
    component: UploadRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRecordPageRoutingModule {}
