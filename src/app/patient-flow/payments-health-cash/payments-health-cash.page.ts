import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-payments-health-cash',
  templateUrl: './payments-health-cash.page.html',
  styleUrls: ['./payments-health-cash.page.scss'],
})
export class PaymentsHealthCashPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
