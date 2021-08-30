import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleTimingsPageRoutingModule } from './schedule-timings-routing.module';

import { ScheduleTimingsPage } from './schedule-timings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleTimingsPageRoutingModule
  ],
  declarations: [ScheduleTimingsPage]
})
export class ScheduleTimingsPageModule {}
