import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidAssistPageRoutingModule } from './covid-assist-routing.module';

import { CovidAssistPage } from './covid-assist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidAssistPageRoutingModule
  ],
  declarations: [CovidAssistPage]
})
export class CovidAssistPageModule {}
