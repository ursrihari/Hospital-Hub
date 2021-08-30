import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-schedule-timings',
  templateUrl: './schedule-timings.page.html',
  styleUrls: ['./schedule-timings.page.scss'],
})
export class ScheduleTimingsPage implements OnInit {

  

canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
