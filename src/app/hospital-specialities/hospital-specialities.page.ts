import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-hospital-specialities',
  templateUrl: './hospital-specialities.page.html',
  styleUrls: ['./hospital-specialities.page.scss'],
})
export class HospitalSpecialitiesPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private router:Router,
    private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  }
  openHospitalsListPage(){
    this.router.navigateByUrl('/patient-hospitals-list');
  }
  openHospitalPage(){
    this.router.navigateByUrl('/hospital');
  }
  

}
