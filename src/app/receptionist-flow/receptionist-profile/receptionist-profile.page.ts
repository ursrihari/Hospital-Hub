import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.page.html',
  styleUrls: ['./receptionist-profile.page.scss'],
})
export class ReceptionistProfilePage implements OnInit {
canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
