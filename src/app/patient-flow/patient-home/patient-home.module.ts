import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomArrayPipe } from '@app/pipe/custom-array.pipe';
import { CustomDatePipe } from '@app/pipe/custom-date.pipe';
import { PatientHomePageRoutingModule } from './patient-home-routing.module';

import { PatientHomePage } from './patient-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientHomePageRoutingModule
  ],
  declarations: [PatientHomePage,CustomArrayPipe,CustomDatePipe]
})
export class PatientHomePageModule {}
