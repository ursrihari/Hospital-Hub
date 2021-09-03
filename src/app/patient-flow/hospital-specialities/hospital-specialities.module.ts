import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HospitalSpecialitiesPageRoutingModule } from './hospital-specialities-routing.module';
import { HospitalSpecialitiesPage } from './hospital-specialities.page';
import { CustomArrayPipe } from '@app/pipe/custom-array.pipe';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompleteModule,
    HospitalSpecialitiesPageRoutingModule
  ],
  declarations: [HospitalSpecialitiesPage,CustomArrayPipe],
  providers:[]
})
export class HospitalSpecialitiesPageModule {}
