import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppointmentHelpPageRoutingModule } from './appointment-help-routing.module';
import { AppointmentHelpPage } from './appointment-help.page';
import { ReconfirmAppointmentComponent } from '../../components/reconfirm-appointment/reconfirm-appointment.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentHelpPageRoutingModule
  ],
  declarations: [AppointmentHelpPage,ReconfirmAppointmentComponent]
})
export class AppointmentHelpPageModule {}
