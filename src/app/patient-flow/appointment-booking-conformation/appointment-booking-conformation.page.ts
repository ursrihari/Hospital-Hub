import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-appointment-booking-conformation',
  templateUrl: './appointment-booking-conformation.page.html',
  styleUrls: ['./appointment-booking-conformation.page.scss'],
})
export class AppointmentBookingConformationPage implements OnInit {
canGoBack: boolean = false;
  constructor(private router:Router,private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  }

  openAppointmentsPage(){
    this.router.navigateByUrl('/patient-appointments');
  }
}
