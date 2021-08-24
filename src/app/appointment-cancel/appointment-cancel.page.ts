import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-appointment-cancel',
  templateUrl: './appointment-cancel.page.html',
  styleUrls: ['./appointment-cancel.page.scss'],
})
export class AppointmentCancelPage implements OnInit {

  


canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
