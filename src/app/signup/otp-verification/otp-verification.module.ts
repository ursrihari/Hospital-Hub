import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OtpVerificationPageRoutingModule } from './otp-verification-routing.module';
import { OtpVerificationPage } from './otp-verification.page';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpVerificationPageRoutingModule
  ],
  providers: [
    SmsRetriever
  ],
  declarations: [OtpVerificationPage]
})
export class OtpVerificationPageModule {}
