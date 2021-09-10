import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
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
    private accountService: AccountService) { }

  ngOnInit() {
    console.log(this.navParams.data);
    this.dataFromParent = this.navParams.data.data;
    this.accountService.getUser().subscribe(user=> {
      this.mobile= user.mobile;
    });
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
      console.log(this.dataFromParent);
      this.closeModal();
  }
}
