import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcommingAppointmentsTabPageRoutingModule } from './upcomming-appointments-tab-routing.module';

import { UpcommingAppointmentsTabPage } from './upcomming-appointments-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcommingAppointmentsTabPageRoutingModule
  ],
  declarations: [UpcommingAppointmentsTabPage]
})
export class UpcommingAppointmentsTabPageModule {}
