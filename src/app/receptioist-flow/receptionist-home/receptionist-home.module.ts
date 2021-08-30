import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionistHomePageRoutingModule } from './receptionist-home-routing.module';

import { ReceptionistHomePage } from './receptionist-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionistHomePageRoutingModule
  ],
  declarations: [ReceptionistHomePage]
})
export class ReceptionistHomePageModule {}
