import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PatientAppointmentDetailsPageRoutingModule } from './patient-appointment-details-routing.module';
import { PatientAppointmentDetailsPage } from './patient-appointment-details.page';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientAppointmentDetailsPageRoutingModule
  ],
  declarations: [PatientAppointmentDetailsPage],
  providers:[LaunchNavigator]
})
export class PatientAppointmentDetailsPageModule {}
