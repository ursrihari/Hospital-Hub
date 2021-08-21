import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentBookingConformationPageRoutingModule } from './appointment-booking-conformation-routing.module';

import { AppointmentBookingConformationPage } from './appointment-booking-conformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentBookingConformationPageRoutingModule
  ],
  declarations: [AppointmentBookingConformationPage]
})
export class AppointmentBookingConformationPageModule {}
