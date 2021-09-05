import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalPageRoutingModule } from './hospital-routing.module';

import { HospitalPage } from './hospital.page';
import { CustomArrayPipe } from '@app/pipe/custom-array.pipe';
import { SubStringPipe } from '@app/pipe/sub-string.pipe';
import { CustomDatePipe } from '@app/pipe/custom-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalPageRoutingModule
  ],
  declarations: [HospitalPage,CustomArrayPipe,SubStringPipe,CustomDatePipe]
})
export class HospitalPageModule {}
