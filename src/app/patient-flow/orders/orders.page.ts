import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  canGoBack: boolean = false;
  constructor(
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    ) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
orderMedicinePage(){
  this.router.navigateByUrl('/enter-delivery-pincode');
}
}
