import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet, private router:Router,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}



openAddRecordPage(){
  //this.router.navigateByUrl('/patient-appointment-details');
  this.presentActionSheet();
}
openUploadRecordPage(){
  this.router.navigateByUrl('/upload-record');
  
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


}
