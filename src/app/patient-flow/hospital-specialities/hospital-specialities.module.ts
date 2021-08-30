import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalSpecialitiesPageRoutingModule } from './hospital-specialities-routing.module';

import { HospitalSpecialitiesPage } from './hospital-specialities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalSpecialitiesPageRoutingModule
  ],
  declarations: [HospitalSpecialitiesPage]
})
export class HospitalSpecialitiesPageModule {}
