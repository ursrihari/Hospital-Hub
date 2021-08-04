import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMedicalTabPageRoutingModule } from './profile-medical-tab-routing.module';

import { ProfileMedicalTabPage } from './profile-medical-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMedicalTabPageRoutingModule
  ],
  declarations: [ProfileMedicalTabPage]
})
export class ProfileMedicalTabPageModule {}
