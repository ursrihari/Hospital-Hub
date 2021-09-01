import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader;
  constructor(public loadingController: LoadingController) { }
  async show() {
    this.loader = await this.loadingController.create({
      spinner: 'crescent',
      mode:'md',
      //duration: 5000,
      //message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await this.loader.present();
  }

  async hide(){
    await this.loader.dismiss();
  }

}
