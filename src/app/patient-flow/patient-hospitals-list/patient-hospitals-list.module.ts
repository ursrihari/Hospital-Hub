import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PatientHospitalsListPageRoutingModule } from './patient-hospitals-list-routing.module';
import { PatientHospitalsListPage } from './patient-hospitals-list.page';
import { RatingModule } from '../../components/rating/rating.module';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    AutoCompleteModule,
    PatientHospitalsListPageRoutingModule
  ],
  declarations: [PatientHospitalsListPage]
})
export class PatientHospitalsListPageModule {}
