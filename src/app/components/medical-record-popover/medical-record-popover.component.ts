import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-medical-record-popover',
  templateUrl: './medical-record-popover.component.html',
  styleUrls: ['./medical-record-popover.component.scss'],
})
export class MedicalRecordPopoverComponent implements OnInit {

  constructor(private router:Router, private alertController:AlertController,private popoverController: PopoverController) { }

  ngOnInit() {}
  viewRecord(){
    this.DismissClick();
    this.router.navigateByUrl('/view-record');
  }
  shareRecord(){
    this.DismissClick();
    this.router.navigateByUrl('/share-record');
  }
  async deleteRecord(){ 
    this.DismissClick();
      const deleterecord = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure?',
        message: "You are about to delete these records from your device. You'll not be able to recover them",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Delete',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await deleterecord.present();
    }
    async DismissClick() {
      await this.popoverController.dismiss();
    }
  

}
