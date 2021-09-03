import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanceledAppointmentsTabPageRoutingModule } from './canceled-appointments-tab-routing.module';

import { CanceledAppointmentsTabPage } from './canceled-appointments-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanceledAppointmentsTabPageRoutingModule
  ],
  declarations: [CanceledAppointmentsTabPage]
})
export class CanceledAppointmentsTabPageModule {}
