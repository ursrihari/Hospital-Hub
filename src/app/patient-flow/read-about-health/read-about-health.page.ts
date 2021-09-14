import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
//import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';

@Component({
  selector: 'app-read-about-health',
  templateUrl: './read-about-health.page.html',
  styleUrls: ['./read-about-health.page.scss'],
})
export class ReadAboutHealthPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet
   ) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.openReadAboutHealthPage();
}
async  openReadAboutHealthPage(){
  await Browser.open({ url: 'http://capacitorjs.com/' });
}

}
