import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IonRouterOutlet} from '@ionic/angular';

@Component({
  selector: 'app-patient-appointment-booking',
  templateUrl: './patient-appointment-booking.page.html',
  styleUrls: ['./patient-appointment-booking.page.scss'],
})
export class PatientAppointmentBookingPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router
    ) {

  }

  ngOnInit() {
      this.canGoBack = this.routerOutlet &&
                       this.routerOutlet.canGoBack();
  }
  
  openDoctorBookingPage(){
    this.router.navigateByUrl('/doctor-booking');
  }
}
