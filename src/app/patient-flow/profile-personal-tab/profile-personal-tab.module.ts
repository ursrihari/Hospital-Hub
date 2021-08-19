import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePersonalTabPageRoutingModule } from './profile-personal-tab-routing.module';

import { ProfilePersonalTabPage } from './profile-personal-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePersonalTabPageRoutingModule
  ],
  declarations: [ProfilePersonalTabPage]
})
export class ProfilePersonalTabPageModule {}
