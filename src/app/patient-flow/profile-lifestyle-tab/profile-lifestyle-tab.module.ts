import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileLifestyleTabPageRoutingModule } from './profile-lifestyle-tab-routing.module';

import { ProfileLifestyleTabPage } from './profile-lifestyle-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileLifestyleTabPageRoutingModule
  ],
  declarations: [ProfileLifestyleTabPage]
})
export class ProfileLifestyleTabPageModule {}
