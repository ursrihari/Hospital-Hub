import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,private router:Router,private actionSheetController:ActionSheetController) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Add a record',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Take a photo',
      role: 'destructive',
      icon: 'camera-outline',
      handler: () => {
        console.log('Delete clicked');
        this.openUploadRecordPage();
      }
    }, {
      text: 'Upload from gallery',
      icon: 'image-outline',
      handler: () => {
        console.log('Share clicked');
        this.openUploadRecordPage();
      }
    }, {
      text: 'Upload Files',
      icon: 'document-text-outline', 
      handler: () => {
        console.log('Play clicked');
        this.openUploadRecordPage();
      }
    }]
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
openUploadRecordPage(){
  this.router.navigateByUrl('/upload-record');
}
}
