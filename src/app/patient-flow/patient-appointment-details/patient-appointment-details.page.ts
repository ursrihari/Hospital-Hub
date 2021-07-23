import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.page.html',
  styleUrls: ['./patient-appointment-details.page.scss'],
})
export class PatientAppointmentDetailsPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
