import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.page.html',
  styleUrls: ['./doctor-appointments.page.scss'],
})
export class DoctorAppointmentsPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,private menuCtrl:MenuController) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
