import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalRecordsPageRoutingModule } from './medical-records-routing.module';

import { MedicalRecordsPage } from './medical-records.page';
import { CustomDatePipe } from '@app/pipe/custom-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalRecordsPageRoutingModule
  ],
  declarations: [MedicalRecordsPage,CustomDatePipe]
})
export class MedicalRecordsPageModule {}
