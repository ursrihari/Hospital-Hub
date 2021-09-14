import { Component, OnInit } from '@angular/core';
import { ProfileEditPage } from '@app/profile-edit/profile-edit.page';
import { AccountService } from '@app/_services';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-lifestyle-tab',
  templateUrl: './profile-lifestyle-tab.page.html',
  styleUrls: ['./profile-lifestyle-tab.page.scss'],
})
export class ProfileLifestyleTabPage implements OnInit {
  profileLifeStyleDetails:object={};
  completeProfile:number=0;
  dataReturned;
  constructor(private modalController:ModalController,
    private accountService:AccountService) { }

  ngOnInit() {
    this.accountService.getUser().subscribe(user=> {
      this.profileLifeStyleDetails = user;
      this.completeProfile = this.accountService.profileCompleteness(user);
    });
  }
  async openModal() {
    let dataToChild = [
      {"label":'Smoking habits',"type":'textarea',"value":this.profileLifeStyleDetails['smokingHabits'],"model":"smokingHabits"},
      {"label":'Alcohol conumption',"type":'textarea',"value":this.profileLifeStyleDetails['alcoholConumption'],"model":"alcoholConumption"},
      {"label":'Activity level',"type":'textarea',"value":this.profileLifeStyleDetails['activityLevel'],"model":'activityLevel'},
      {"label":'Food preference',"type":'textarea',"value":this.profileLifeStyleDetails['foodPreference'],"model":'foodPreference'},
      {"label":'Occupation',"type":'text',"value":this.profileLifeStyleDetails['occupation'],"model":'occupation'}
    ];
    const modal = await this.modalController.create({
      component: ProfileEditPage,
      componentProps: {data: dataToChild}
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data.value.data;
        this.dataReturned.forEach(element => {
          this.profileLifeStyleDetails[''+element.model+''] = element.value;
        });
      }
    });

    return await modal.present();
  }
}
