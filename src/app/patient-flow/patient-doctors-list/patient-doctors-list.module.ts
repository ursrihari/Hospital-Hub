import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientDoctorsListPageRoutingModule } from './patient-doctors-list-routing.module';
import { PatientDoctorsListPage } from './patient-doctors-list.page';
import { RatingModule } from '../../components/rating/rating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientDoctorsListPageRoutingModule,
    RatingModule
  ],
  declarations: [PatientDoctorsListPage]
})
export class PatientDoctorsListPageModule {}
