import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalServicesPageRoutingModule } from './hospital-services-routing.module';

import { HospitalServicesPage } from './hospital-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalServicesPageRoutingModule
  ],
  declarations: [HospitalServicesPage]
})
export class HospitalServicesPageModule {}
