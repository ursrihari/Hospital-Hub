import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-test-bookings',
  templateUrl: './test-bookings.page.html',
  styleUrls: ['./test-bookings.page.scss'],
})
export class TestBookingsPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

openHealthCheckupPage(){
  this.router.navigateByUrl('/health-checkup');
}
}
