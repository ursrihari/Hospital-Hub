import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorHomePageRoutingModule } from './doctor-home-routing.module';

import { DoctorHomePage } from './doctor-home.page';
import { CustomDatePipe } from '@app/pipe/custom-date.pipe';
import { SubStringPipe } from '@app/pipe/sub-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorHomePageRoutingModule
  ],
  declarations: [DoctorHomePage,CustomDatePipe,SubStringPipe]
})
export class DoctorHomePageModule {}
