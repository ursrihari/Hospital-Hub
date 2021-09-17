import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-receptionist-home',
  templateUrl: './receptionist-home.page.html',
  styleUrls: ['./receptionist-home.page.scss'],
})
export class ReceptionistHomePage implements OnInit {



canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}


}
