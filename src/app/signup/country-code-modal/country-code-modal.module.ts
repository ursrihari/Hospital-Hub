import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CountryCodeModalPageRoutingModule } from './country-code-modal-routing.module';
import { CountryCodeModalPage } from './country-code-modal.page';
import { OrderByPipe } from '@app/pipe/order-by.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryCodeModalPageRoutingModule
  ],
  declarations: [CountryCodeModalPage,OrderByPipe]
})
export class CountryCodeModalPageModule {}
