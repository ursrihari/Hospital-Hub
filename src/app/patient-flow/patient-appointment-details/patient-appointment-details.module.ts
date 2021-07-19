import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientAppointmentDetailsPageRoutingModule } from './patient-appointment-details-routing.module';

import { PatientAppointmentDetailsPage } from './patient-appointment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAppointmentDetailsPageRoutingModule
  ],
  declarations: [PatientAppointmentDetailsPage]
})
export class PatientAppointmentDetailsPageModule {}
