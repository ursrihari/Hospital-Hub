import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.page.html',
  styleUrls: ['./view-record.page.scss'],
})
export class ViewRecordPage implements OnInit {
canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
}
