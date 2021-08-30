import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.page.html',
  styleUrls: ['./health-checkup.page.scss'],
})
export class HealthCheckupPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
