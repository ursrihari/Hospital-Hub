import { Component, OnInit } from '@angular/core';
import { AccountService, AuthService } from '@app/_services';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  dataFromParent:any=[];
  mobile;
  constructor(private modalController:ModalController,
    private navParams: NavParams,
    private authService:AuthService,
    private accountService: AccountService) { }

  ngOnInit() {
    console.log(this.navParams.data);
    this.dataFromParent = this.navParams.data.data;
    console.log(this.accountService.getUser());
    //this.accountService.getUser().subscribe(user=> {
      this.mobile= this.accountService.getUser().mobile;
    //});
  }
  closeModal(){
    this.modalController.dismiss({
      'dismissed': true,
      value: {data:this.dataFromParent }
    });
  }

  saveProfileData(){
    let userData = {};
    this.dataFromParent.forEach(element => {
        userData[element.model] = element.value;
    });
    this.accountService.setUser(this.mobile,userData);
      //console.log(this.dataFromParent);
      let user = this.accountService.getUser();
      let data={
        mobile: user.mobile,
        uid: user.uid
      }
      let params ={...data, ...userData};
      console.log(JSON.stringify(params));
      this.authService.addDoctorProfileData(params,true).subscribe(data=>{
           this.closeModal();
      });
  }
  

}
