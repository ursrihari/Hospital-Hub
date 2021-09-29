import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ProfileEditPage } from '@app/profile-edit/profile-edit.page';
import { AccountService, AuthService } from '@app/_services';
import { ModalController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {
  canGoBack: boolean = false;
  profileDetails:object={};
  completeProfile:number=0;
  profileKeys=[];
  dataReturned;
  constructor(private modalController:ModalController,
    private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private accountService:AccountService) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
    let user  = this.accountService.getUser();
    this.profileKeys = ['name','mobile','fee','email','gender','experience','address','docImage','hospitalName','speciality'];
    this.profileKeys.forEach(key=>{
      this.profileDetails[key] = user[key];
    });
   console.log(this.profileDetails);
    this.completeProfile = this.accountService.profileCompleteness(this.profileDetails);

  }
  async openModal() {
    let dataToChild = [
      {"label":'Name',"type":'text',"value":this.profileDetails['name'],"model":"name"},
      {"label":'Contact number',"type":'text',"value":this.profileDetails['mobile'],"model":"mobile"},
      {"label":'Consultation Fee',"type":'text',"value":this.profileDetails['fee'],"model":"fee"},
      {"label":'Email id',"type":'eamil',"value":this.profileDetails['email'],"model":'email'},
      {"label":'Gender',"type":'radio',"value":this.profileDetails['gender'],"model":'gender'},
      {"label":'Experience',"type":'text',"value":this.profileDetails['experience'],"model":'experience'},
      {"label":'Address',"type":'textarea',"value":this.profileDetails['address'],"model":'address'}
    ];
    const modal = await this.modalController.create({
      component: ProfileEditPage,
      componentProps: {data: dataToChild}
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data.value.data;
        this.dataReturned.forEach(element => {
          this.profileDetails[''+element.model+''] = element.value;
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
    this.profileDetails['patientImage'] = imageUrl;
    this.uploadImage(imageUrl);

}
uploadImage(imageUrl){
let params={
  mobile: this.profileDetails['contactNo'],
  image: imageUrl
}
console.log(JSON.stringify(params));
this.authService.addProfileData(params,true).subscribe(data=>{
   console.log(data); 
});
}


}

