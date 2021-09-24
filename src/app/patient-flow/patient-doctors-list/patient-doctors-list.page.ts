import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonRouterOutlet, PopoverController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PopoverComponent } from '../../components/popover/popover.component';
import { AutocompleteSearchService } from '@app/_services/autocomplete-search.service';
import { AuthService, GlobalValuesService } from '@app/_services';

@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.page.html',
  styleUrls: ['./patient-doctors-list.page.scss'],
})
export class PatientDoctorsListPage implements OnInit {
  canGoBack: boolean = false;
  searchText:any;
  specialityData={};
  doctorsData=[];
  showContent:boolean = false;
  showLoader:boolean = false;
  @ViewChild('searchbar') searchbar: AutocompleteSearchService;
  constructor(private routerOutlet: IonRouterOutlet,
    public alertController: AlertController,
    private popoverController: PopoverController,
    private route: ActivatedRoute,
    private authService:AuthService,
    private globalValues:GlobalValuesService,
    public autocompleteSearchService: AutocompleteSearchService,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  this.route.queryParams.subscribe(params => {
  if (this.router.getCurrentNavigation().extras.state) {
    this.specialityData = this.router.getCurrentNavigation().extras.state.data;
    console.log(JSON.stringify(this.specialityData));
    this.searchText = this.specialityData['name'];
    if(this.specialityData.hasOwnProperty('type') && this.specialityData['type'] == 'hospital'){
      this.autocompleteSearchService.searchType = 'search-doctors-in-hospital';
      this.autocompleteSearchService.paramsObj = {hid:this.specialityData['id']};
      this.getDoctorsInHospital(this.specialityData["id"]);
    }else if(this.specialityData.hasOwnProperty('type') && this.specialityData['type'] == 'doctors' && this.specialityData['id']=='all'){
      this.autocompleteSearchService.searchType = 'search-doctors-location-wise';
          let params = { 
            pMobile: "7894561230",
            speciality:'',
            limit: 'limit 0,20'
           };
          this.globalValues.getLocation().subscribe(data=>{
            params['cityId'] = data.cityId;
            params['latitude'] = data.latitude;
            params['longitude'] = data.longitude;
          });
          this.autocompleteSearchService.paramsObj = params;
      this.getNearDoctors();  
    }else if(this.specialityData.hasOwnProperty('type') && this.specialityData['type'] == 'speciality'){
      this.autocompleteSearchService.searchType = 'search-doctors-by-speciality';
      this.autocompleteSearchService.paramsObj = {specId:this.specialityData['id']};
      this.getDoctors(this.specialityData['id']);
    }
  }
  this.autocompleteSearchService.searchedData('').subscribe(data=>{
    console.log(data);
    this.doctorsData = data;
  });
  this.autocompleteSearchService.showLoaderForSearchbar(true).subscribe(data=>{
    this.showLoader = data;
  });
  });
}
getDoctors(id){
  let params={
    specId: id
  };
  this.showLoader = true;
  this.authService.getDoctorsBySpeciality(params,true).subscribe(data=>{
    console.log(JSON.stringify(data));
    this.doctorsData = data;
    this.showLoader = false;
  });
}
getDoctorsInHospital(id){
  let params={
    hid: id
  };
  this.showLoader = true;
  this.authService.getDoctorsInHospital(params,true).subscribe(data=>{
    console.log(JSON.stringify(data));
    this.doctorsData = data;
    this.showLoader = false;
  });
}
getNearDoctors(){
  let params={
    limit:'LIMIT 0,10'
  }
  this.globalValues.getLocation().subscribe(data=>{
    params['cityId'] = data.cityId;
    params['latitude'] = data.latitude;
    params['longitude'] = data.longitude;
  });
  this.showLoader = true;
  this.authService.getLocationWiseDoctors(params,true).subscribe((data) => {
      console.log(data);
      this.doctorsData = data;
      this.showLoader = false; 
  });
  
}
openDoctorViewPage(doctor){
  let navigationExtras: NavigationExtras = { state: { 
    data: {
      id: doctor.docId
    }
  }};
  this.router.navigate(['/doctor-view'], navigationExtras);
}
openSelectDoctorTimeSlotPage(doctor){
  let navigationExtras: NavigationExtras = { state: { 
    doctorData: doctor
  }};
  this.router.navigate(['/select-doctor-time-slot'], navigationExtras);
}


async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverComponent,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}


async presentAlertCheckbox() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Choose Filter',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Now or Later',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Video Consult',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'PLUS',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}
}

