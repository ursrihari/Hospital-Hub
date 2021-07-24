import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PatientHospitalsListPageRoutingModule } from './patient-hospitals-list-routing.module';
import { PatientHospitalsListPage } from './patient-hospitals-list.page';
import { RatingModule } from '../../components/rating/rating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    PatientHospitalsListPageRoutingModule
  ],
  declarations: [PatientHospitalsListPage]
})
export class PatientHospitalsListPageModule {}
