import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from '@app/_services';
import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers';


import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';

//plugins
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { ReceiptionistMedicalRecordsPipe } from './receiptionist-medical-records.pipe';

@NgModule({
  declarations: [AppComponent, ReceiptionistMedicalRecordsPipe],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot({
      driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB]
    })
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,NativeGeocoder
  //  Globalization
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
