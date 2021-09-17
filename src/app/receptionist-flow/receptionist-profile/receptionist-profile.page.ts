import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProfileEditPage } from '@app/profile-edit/profile-edit.page';
import { AccountService, AuthService } from '@app/_services';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.page.html',
  styleUrls: ['./receptionist-profile.page.scss'],
})
export class ReceptionistProfilePage implements OnInit {
canGoBack: boolean = false;
profilePersonalDetails:object={};
completeProfile:number=0;
dataReturned;
constructor(private modalController:ModalController,
  private accountService:AccountService,
  public actionSheetController: ActionSheetController,
  private authService:AuthService,
  private routerOutlet:IonRouterOutlet) { }

ngOnInit() {
  this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();

  let user = this.profilePersonalDetails = this.accountService.getUser();
  this.completeProfile = this.accountService.profileCompleteness(user);
  console.log(this.profilePersonalDetails);
  
}

async openModal() {
  let dataToChild = [
    {"label":'Name',"type":'text',"value":this.profilePersonalDetails['name'],"model":"name"},
    {"label":'Contact number',"type":'text',"value":this.profilePersonalDetails['mobile'],"model":"mobile"},
    {"label":'Email id',"type":'eamil',"value":this.profilePersonalDetails['email'],"model":'email'},
    {"label":'Gender',"type":'text',"value":this.profilePersonalDetails['gender'],"model":'gender'},
    {"label":'Date of birth',"type":'text',"value":this.profilePersonalDetails['dateOfBirth'],"model":'dateOfBirth'},
    {"label":'Blood group',"type":'text',"value":this.profilePersonalDetails['bloodGroup'],"model":'bloodGroup'},
    {"label":'Marital status',"type":'text',"value":this.profilePersonalDetails['maritalStatus'],"model":'maritalStatus'},
    {"label":'Height',"type":'text',"value":this.profilePersonalDetails['height'],"model":'height'},
    {"label":'Weight',"type":'text',"value":this.profilePersonalDetails['weight'],"model":'weight'},
    {"label":'Emergency contact',"type":'number',"value":this.profilePersonalDetails['emergencyContact'],"model":'emergencyContact'},
    {"label":'Location',"type":'text',"value":this.profilePersonalDetails['location'],"model":'location'}
  ];
  const modal = await this.modalController.create({
    component: ProfileEditPage,
    componentProps: {data: dataToChild}
  });

  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data.value.data;
      this.dataReturned.forEach(element => {
        this.profilePersonalDetails[''+element.model+''] = element.value;
      });
    }
  });
  return await modal.present();
}

async openCamera(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    this.profilePersonalDetails['patientImage'] = imageUrl;
    this.uploadImage(imageUrl);

}
uploadImage(imageUrl){
let params={
  mobile: this.profilePersonalDetails['contactNo'],
  image: imageUrl
}
console.log(JSON.stringify(params));
this.authService.addProfileData(params,true).subscribe(data=>{
   console.log(data); 
});
}
}
