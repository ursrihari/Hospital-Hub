import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthCheckupPageRoutingModule } from './health-checkup-routing.module';

import { HealthCheckupPage } from './health-checkup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthCheckupPageRoutingModule
  ],
  declarations: [HealthCheckupPage]
})
export class HealthCheckupPageModule {}
