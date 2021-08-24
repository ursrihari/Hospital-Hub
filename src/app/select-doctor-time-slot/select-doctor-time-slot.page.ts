import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-select-doctor-time-slot',
  templateUrl: './select-doctor-time-slot.page.html',
  styleUrls: ['./select-doctor-time-slot.page.scss'],
})
export class SelectDoctorTimeSlotPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private router:Router,private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

  openBookingConformationPage(){
    this.router.navigateByUrl('/appointment-booking-conformation');
  }

}
