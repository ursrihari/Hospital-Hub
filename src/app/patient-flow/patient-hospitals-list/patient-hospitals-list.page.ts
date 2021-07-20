import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-hospitals-list',
  templateUrl: './patient-hospitals-list.page.html',
  styleUrls: ['./patient-hospitals-list.page.scss'],
})
export class PatientHospitalsListPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
  

}
