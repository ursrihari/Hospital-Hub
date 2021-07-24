import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PatientAppointmentBookingPageRoutingModule } from './patient-appointment-booking-routing.module';
import { PatientAppointmentBookingPage } from './patient-appointment-booking.page';
import { RatingModule } from '@app/components/rating/rating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    PatientAppointmentBookingPageRoutingModule
  ],
  declarations: [PatientAppointmentBookingPage]
})
export class PatientAppointmentBookingPageModule {}
