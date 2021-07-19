import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionistProfilePageRoutingModule } from './receptionist-profile-routing.module';

import { ReceptionistProfilePage } from './receptionist-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionistProfilePageRoutingModule
  ],
  declarations: [ReceptionistProfilePage]
})
export class ReceptionistProfilePageModule {}
