import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-read-about-health',
  templateUrl: './read-about-health.page.html',
  styleUrls: ['./read-about-health.page.scss'],
})
export class ReadAboutHealthPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
