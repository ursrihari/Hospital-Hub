import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.page.html',
  styleUrls: ['./my-patients.page.scss'],
})
export class MyPatientsPage implements OnInit {

 

canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
}
