import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReconfirmAppointmentComponent } from './reconfirm-appointment.component';

@NgModule({
  declarations: [ReconfirmAppointmentComponent],
  imports: [CommonModule, IonicModule],
  exports: [ReconfirmAppointmentComponent],
})
export class ReconfirmAppointmentModule {}