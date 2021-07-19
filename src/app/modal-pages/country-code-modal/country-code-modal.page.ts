import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-country-code-modal',
  templateUrl: './country-code-modal.page.html',
  styleUrls: ['./country-code-modal.page.scss'],
})
export class CountryCodeModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
      this.modalController.dismiss({
        'dismissed': true
      });
    
  }

}
