import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentCancelPageRoutingModule } from './appointment-cancel-routing.module';

import { AppointmentCancelPage } from './appointment-cancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentCancelPageRoutingModule
  ],
  declarations: [AppointmentCancelPage]
})
export class AppointmentCancelPageModule {}
