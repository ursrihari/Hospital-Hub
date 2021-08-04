import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestBookingsPageRoutingModule } from './test-bookings-routing.module';

import { TestBookingsPage } from './test-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestBookingsPageRoutingModule
  ],
  declarations: [TestBookingsPage]
})
export class TestBookingsPageModule {}
