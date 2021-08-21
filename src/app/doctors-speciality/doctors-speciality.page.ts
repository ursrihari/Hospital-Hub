import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-doctors-speciality',
  templateUrl: './doctors-speciality.page.html',
  styleUrls: ['./doctors-speciality.page.scss'],
})
export class DoctorsSpecialityPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private router:Router,private routerOutlet: IonRouterOutlet) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
  
  openDoctorsPage(){
    this.router.navigateByUrl('/patient-doctors-list');
  }

}
