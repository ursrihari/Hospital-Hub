import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedAppointmentsTabPageRoutingModule } from './completed-appointments-tab-routing.module';

import { CompletedAppointmentsTabPage } from './completed-appointments-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedAppointmentsTabPageRoutingModule
  ],
  declarations: [CompletedAppointmentsTabPage]
})
export class CompletedAppointmentsTabPageModule {}
