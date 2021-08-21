import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterDeliveryPincodePage } from './enter-delivery-pincode.page';

const routes: Routes = [
  {
    path: '',
    component: EnterDeliveryPincodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterDeliveryPincodePageRoutingModule {}
