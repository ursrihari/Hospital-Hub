import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterDeliveryPincodePageRoutingModule } from './enter-delivery-pincode-routing.module';

import { EnterDeliveryPincodePage } from './enter-delivery-pincode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterDeliveryPincodePageRoutingModule
  ],
  declarations: [EnterDeliveryPincodePage]
})
export class EnterDeliveryPincodePageModule {}
