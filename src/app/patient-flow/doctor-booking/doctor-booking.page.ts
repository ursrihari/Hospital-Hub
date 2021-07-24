import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-doctor-booking',
  templateUrl: './doctor-booking.page.html',
  styleUrls: ['./doctor-booking.page.scss'],
})
export class DoctorBookingPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
gotoPaymentPage(){
  //this.router.navigateByUrl('/');
}
}
