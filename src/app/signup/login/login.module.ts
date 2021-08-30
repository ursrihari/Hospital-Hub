import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { Sim } from '@ionic-native/sim/ngx';
import { LoginPage } from './login.page';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  providers: [
    Sim,SmsRetriever
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
