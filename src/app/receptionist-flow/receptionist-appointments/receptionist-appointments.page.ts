import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-receptionist-appointments',
  templateUrl: './receptionist-appointments.page.html',
  styleUrls: ['./receptionist-appointments.page.scss'],
})
export class ReceptionistAppointmentsPage implements OnInit {
canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}


}
