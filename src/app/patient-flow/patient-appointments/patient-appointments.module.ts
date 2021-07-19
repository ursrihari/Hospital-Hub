import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientAppointmentsPageRoutingModule } from './patient-appointments-routing.module';

import { PatientAppointmentsPage } from './patient-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAppointmentsPageRoutingModule
  ],
  declarations: [PatientAppointmentsPage]
})
export class PatientAppointmentsPageModule {}
