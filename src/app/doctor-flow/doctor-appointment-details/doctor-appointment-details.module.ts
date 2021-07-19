import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorAppointmentDetailsPageRoutingModule } from './doctor-appointment-details-routing.module';

import { DoctorAppointmentDetailsPage } from './doctor-appointment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorAppointmentDetailsPageRoutingModule
  ],
  declarations: [DoctorAppointmentDetailsPage]
})
export class DoctorAppointmentDetailsPageModule {}
