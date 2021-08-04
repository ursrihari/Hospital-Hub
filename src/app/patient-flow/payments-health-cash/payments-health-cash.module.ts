import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsHealthCashPageRoutingModule } from './payments-health-cash-routing.module';

import { PaymentsHealthCashPage } from './payments-health-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsHealthCashPageRoutingModule
  ],
  declarations: [PaymentsHealthCashPage]
})
export class PaymentsHealthCashPageModule {}
