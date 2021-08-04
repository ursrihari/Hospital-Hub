import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePlusPageRoutingModule } from './explore-plus-routing.module';

import { ExplorePlusPage } from './explore-plus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePlusPageRoutingModule
  ],
  declarations: [ExplorePlusPage]
})
export class ExplorePlusPageModule {}
