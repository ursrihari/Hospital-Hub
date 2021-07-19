import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientAppointmentBookingPageRoutingModule } from './patient-appointment-booking-routing.module';

import { PatientAppointmentBookingPage } from './patient-appointment-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAppointmentBookingPageRoutingModule
  ],
  declarations: [PatientAppointmentBookingPage]
})
export class PatientAppointmentBookingPageModule {}
