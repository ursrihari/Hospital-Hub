import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDoctorTimeSlotPageRoutingModule } from './select-doctor-time-slot-routing.module';

import { SelectDoctorTimeSlotPage } from './select-doctor-time-slot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDoctorTimeSlotPageRoutingModule
  ],
  declarations: [SelectDoctorTimeSlotPage]
})
export class SelectDoctorTimeSlotPageModule {}
