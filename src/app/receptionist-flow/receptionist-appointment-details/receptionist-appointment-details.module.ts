import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionistAppointmentDetailsPageRoutingModule } from './receptionist-appointment-details-routing.module';

import { ReceptionistAppointmentDetailsPage } from './receptionist-appointment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionistAppointmentDetailsPageRoutingModule
  ],
  declarations: [ReceptionistAppointmentDetailsPage]
})
export class ReceptionistAppointmentDetailsPageModule {}
