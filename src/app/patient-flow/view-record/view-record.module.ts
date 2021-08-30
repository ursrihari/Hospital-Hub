import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecordPageRoutingModule } from './view-record-routing.module';

import { ViewRecordPage } from './view-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecordPageRoutingModule
  ],
  declarations: [ViewRecordPage]
})
export class ViewRecordPageModule {}
