import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal(){
      this.modalController.dismiss({
        'dismissed': true
     });
    }
    


}
