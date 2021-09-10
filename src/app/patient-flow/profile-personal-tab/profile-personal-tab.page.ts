import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileEditPage } from '@app/profile-edit/profile-edit.page';
import { AccountService } from '@app/_services';
import { User } from '@app/_model';

@Component({
  selector: 'app-profile-personal-tab',
  templateUrl: './profile-personal-tab.page.html',
  styleUrls: ['./profile-personal-tab.page.scss'],
})
export class ProfilePersonalTabPage implements OnInit {
  profilePersonalDetails={
    name:'',
    mobile:'',
    email:'',
    gender:'',
    dateOfBirth:'',
    bloodGroup:'',
    maritalStatus:'',
    height:'',
    weight:'',
    emergencyContact:'',
    location:''
  };
    completeProfile:number=0;
  dataReturned;
  constructor(private modalController:ModalController,
    private accountService:AccountService) { }

  ngOnInit() {
    this.getProfilePersonalData();
  }

  async openModal() {
    let dataToChild = [
      {"label":'Name',"type":'text',"value":this.profilePersonalDetails.name,"model":"name"},
      {"label":'Contact number',"type":'text',"value":this.profilePersonalDetails.mobile,"model":"mobile"},
      {"label":'Email id',"type":'eamil',"value":this.profilePersonalDetails.email,"model":'email'},
      {"label":'Gender',"type":'text',"value":this.profilePersonalDetails.gender,"model":'gender'},
      {"label":'Date of birth',"type":'text',"value":this.profilePersonalDetails.dateOfBirth,"model":'dateOfBirth'},
      {"label":'Blood group',"type":'text',"value":this.profilePersonalDetails.bloodGroup,"model":'bloodGroup'},
      {"label":'Marital status',"type":'text',"value":this.profilePersonalDetails.maritalStatus,"model":'maritalStatus'},
      {"label":'Height',"type":'text',"value":this.profilePersonalDetails.height,"model":'height'},
      {"label":'Weight',"type":'text',"value":this.profilePersonalDetails.weight,"model":'weight'},
      {"label":'Emergency contact',"type":'number',"value":this.profilePersonalDetails.emergencyContact,"model":'emergencyContact'},
      {"label":'Location',"type":'text',"value":this.profilePersonalDetails.location,"model":'location'}
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
  getProfilePersonalData(){
    console.log(this.accountService.user);
    let count=0;
    this.accountService.getUser().subscribe(user=> {
      for (const k in user) {  
         this.profilePersonalDetails[k] =  user[k];
         if(this.profilePersonalDetails[k]!=''){
            count++;
            console.log(count);
            this.completeProfile = Math.round(((count)/24)*100);
         }
      }
      
      
    });
  }

}
