import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-share-record',
  templateUrl: './share-record.page.html',
  styleUrls: ['./share-record.page.scss'],
})
export class ShareRecordPage implements OnInit {
canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}


}
