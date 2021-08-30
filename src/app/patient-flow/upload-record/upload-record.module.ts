import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadRecordPageRoutingModule } from './upload-record-routing.module';

import { UploadRecordPage } from './upload-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadRecordPageRoutingModule
  ],
  declarations: [UploadRecordPage]
})
export class UploadRecordPageModule {}
