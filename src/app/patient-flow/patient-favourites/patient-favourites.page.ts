import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-favourites',
  templateUrl: './patient-favourites.page.html',
  styleUrls: ['./patient-favourites.page.scss'],
})
export class PatientFavouritesPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

}
