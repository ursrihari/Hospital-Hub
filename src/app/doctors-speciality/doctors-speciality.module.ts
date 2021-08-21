import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorsSpecialityPageRoutingModule } from './doctors-speciality-routing.module';

import { DoctorsSpecialityPage } from './doctors-speciality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorsSpecialityPageRoutingModule
  ],
  declarations: [DoctorsSpecialityPage]
})
export class DoctorsSpecialityPageModule {}
