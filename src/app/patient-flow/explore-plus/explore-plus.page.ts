import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-explore-plus',
  templateUrl: './explore-plus.page.html',
  styleUrls: ['./explore-plus.page.scss'],
})
export class ExplorePlusPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}


}
