import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.page.html',
  styleUrls: ['./doctor-view.page.scss'],
})
export class DoctorViewPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }
  
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  }

}
