import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.page.html',
  styleUrls: ['./doctor-appointments.page.scss'],
})
export class DoctorAppointmentsPage implements OnInit {

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
