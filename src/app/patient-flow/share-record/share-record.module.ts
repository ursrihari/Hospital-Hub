import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareRecordPageRoutingModule } from './share-record-routing.module';

import { ShareRecordPage } from './share-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareRecordPageRoutingModule
  ],
  declarations: [ShareRecordPage]
})
export class ShareRecordPageModule {}
