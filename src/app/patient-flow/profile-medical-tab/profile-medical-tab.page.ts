import { Component, OnInit } from '@angular/core';
import { ProfileEditPage } from '@app/profile-edit/profile-edit.page';
import { AccountService } from '@app/_services';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-medical-tab',
  templateUrl: './profile-medical-tab.page.html',
  styleUrls: ['./profile-medical-tab.page.scss'],
})
export class ProfileMedicalTabPage implements OnInit {
  profileMedicalDetails:object={};
  completeProfile:number=0;
  dataReturned;
  constructor(private modalController:ModalController,
    private accountService:AccountService) { }

  ngOnInit() {
    let user = this.profileMedicalDetails = this.accountService.getUser();
    this.completeProfile = this.accountService.profileCompleteness(user);
  }
  async openModal() {
    let dataToChild = [
      {"label":'Allergies',"type":'textarea',"value":this.profileMedicalDetails['allergies'],"model":"allergies"},
      {"label":'Current medications',"type":'textarea',"value":this.profileMedicalDetails['currentMedications'],"model":"currentMedications"},
      {"label":'Past medications',"type":'textarea',"value":this.profileMedicalDetails['pastMedications'],"model":'pastMedications'},
      {"label":'Chronic diseases',"type":'textarea',"value":this.profileMedicalDetails['chronicDiseases'],"model":'chronicDiseases'},
      {"label":'Injuries',"type":'textarea',"value":this.profileMedicalDetails['injuries'],"model":'injuries'},
      {"label":'Surgeies',"type":'text',"value":this.profileMedicalDetails['surgeies'],"model":'surgeies'}
    ];
    const modal = await this.modalController.create({
      component: ProfileEditPage,
      componentProps: {data: dataToChild}
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data.value.data;
        this.dataReturned.forEach(element => {
          this.profileMedicalDetails[''+element.model+''] = element.value;
        });
      }
    });

    return await modal.present();
  }
}
