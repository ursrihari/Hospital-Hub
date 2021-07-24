import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-favourites',
  templateUrl: './patient-favourites.page.html',
  styleUrls: ['./patient-favourites.page.scss'],
})
export class PatientFavouritesPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

openDoctorViewPage(){
  this.router.navigateByUrl('/doctor-view');
}
openBookAppointmentPage(){
  this.router.navigateByUrl('/doctor-booking');
}

}
