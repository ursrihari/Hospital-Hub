import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.page.html',
  styleUrls: ['./patient-doctors-list.page.scss'],
})
export class PatientDoctorsListPage implements OnInit {
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

}
