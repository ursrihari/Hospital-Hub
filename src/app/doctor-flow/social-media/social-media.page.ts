import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.page.html',
  styleUrls: ['./social-media.page.scss'],
})
export class SocialMediaPage implements OnInit {
  canGoBack: boolean = false;
    constructor(private routerOutlet: IonRouterOutlet) { }
  
    ngOnInit() {
      this.canGoBack = this.routerOutlet &&
                       this.routerOutlet.canGoBack();
  }
  

}
