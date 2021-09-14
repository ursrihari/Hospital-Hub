import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, PopoverController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { MedicalRecordPopoverComponent } from '@app/components/medical-record-popover/medical-record-popover.component';
import { AuthService } from '@app/_services';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {
  medicalRecords=[];
  showContent:boolean = false;
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet, private router:Router,
    public actionSheetController: ActionSheetController,
    public popoverController: PopoverController,
    private authService:AuthService) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.getMedicalRecords();
}

openAddRecordPage(){
  //this.router.navigateByUrl('/patient-appointment-details');
  //this.presentActionSheet();
}
// openUploadRecordPage(){
//   this.router.navigateByUrl('/upload-record');
// }

viewRecord(){
  this.router.navigateByUrl('/view-record');
}

getMedicalRecords(){
  //this.medicalRecords = this.getMedicalRecordsDemo();
  this.showContent = true;
  let params={
    
  }
  this.authService.getMedicalRecords(params,true).subscribe((data) => {
    console.log(data);
    //this.medicalRecords = data;
    //this.showContent = true;
  });
}

// async presentActionSheet() {
//   const actionSheet = await this.actionSheetController.create({
//     header: 'Add a record',
//     cssClass: 'my-custom-class',
//     buttons: [{
//       text: 'Take a photo',
//       role: 'destructive',
//       icon: 'camera-outline',
//       handler: () => {
//         console.log('Delete clicked');
//         this.openUploadRecordPage();
//       }
//     }, {
//       text: 'Upload from gallery',
//       icon: 'image-outline',
//       handler: () => {
//         console.log('Share clicked');
//         this.openUploadRecordPage();
//       }
//     }, {
//       text: 'Upload Files',
//       icon: 'document-text-outline', 
//       handler: () => {
//         console.log('Play clicked');
//         this.openUploadRecordPage();
//       }
//     }]
//   });
//   await actionSheet.present();

//   const { role } = await actionSheet.onDidDismiss();
//   console.log('onDidDismiss resolved with role', role);
// }

async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: MedicalRecordPopoverComponent,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}



/**  Demo Data */


getMedicalRecordsDemo(){
  return [
    {"recordId":"1","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"08-07-2021"},
    {"recordId":"2","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"08-10-2021"},
    {"recordId":"3","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"08-18-2021"},
    {"recordId":"4","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"08-20-2021"},
    {"recordId":"5","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"08-30-2021"},
    {"recordId":"6","recordAddedBy":"Nayomi","recordFor":"Fatima","noOfFiles":"1","recordAddedDate":"09-07-2021"}
  ]
}
/**  Demo Data */

}
