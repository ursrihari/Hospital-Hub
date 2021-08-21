import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadAboutHealthPageRoutingModule } from './read-about-health-routing.module';

import { ReadAboutHealthPage } from './read-about-health.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadAboutHealthPageRoutingModule
  ],
  declarations: [ReadAboutHealthPage]
})
export class ReadAboutHealthPageModule {}
