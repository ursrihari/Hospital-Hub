import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-record',
  templateUrl: './upload-record.page.html',
  styleUrls: ['./upload-record.page.scss'],
})
export class UploadRecordPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  closePage(){
    this.navCtrl.pop();
  }
  uploadRecord(){
    this.navCtrl.navigateRoot('medical-records');
  }
}
