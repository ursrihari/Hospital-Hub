import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientFavouritesPageRoutingModule } from './patient-favourites-routing.module';

import { PatientFavouritesPage } from './patient-favourites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientFavouritesPageRoutingModule
  ],
  declarations: [PatientFavouritesPage]
})
export class PatientFavouritesPageModule {}
