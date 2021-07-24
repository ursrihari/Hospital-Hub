import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingPageRoutingModule } from './doctor-booking-routing.module';

import { DoctorBookingPage } from './doctor-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorBookingPageRoutingModule
  ],
  declarations: [DoctorBookingPage]
})
export class DoctorBookingPageModule {}
