import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-hospital-services',
  templateUrl: './hospital-services.page.html',
  styleUrls: ['./hospital-services.page.scss'],
})
export class HospitalServicesPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
openDoctorsListPage(){
  this.router.navigateByUrl('/patient-doctors-list');
}

}
