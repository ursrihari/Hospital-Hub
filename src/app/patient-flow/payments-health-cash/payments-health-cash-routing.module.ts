import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsHealthCashPage } from './payments-health-cash.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsHealthCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsHealthCashPageRoutingModule {}
