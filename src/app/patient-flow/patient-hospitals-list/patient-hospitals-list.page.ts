import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, IonRouterOutlet, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';
import { AutocompleteSearchService } from '@app/_services/autocomplete-search.service';
import { AuthService, GlobalValuesService } from '@app/_services';

@Component({
  selector: 'app-patient-hospitals-list',
  templateUrl: './patient-hospitals-list.page.html',
  styleUrls: ['./patient-hospitals-list.page.scss'],
})
export class PatientHospitalsListPage implements OnInit {
  canGoBack: boolean = false;
  hospitals = [];
  location:object={};
  //showContent:boolean =false;
  selectedObj:object={};
  searchText:any;
  showLoader:boolean=false;
  @ViewChild('searchbar') searchbar: AutocompleteSearchService;
  constructor(private routerOutlet: IonRouterOutlet,
    private alertController:AlertController,
    private popoverController:PopoverController,
    public autocompleteSearchService: AutocompleteSearchService,
    private globalValues:GlobalValuesService,
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }
  ngOnInit() {
    this.globalValues.getLocation().subscribe(data=>{
      this.location = data;
    });
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
      this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedObj = this.router.getCurrentNavigation().extras.state.data;
        console.log(JSON.stringify(this.selectedObj));
        
        if(this.selectedObj['type']=='speciality'){
          this.autocompleteSearchService.searchType = 'search-hospital-by-speciality';
          this.autocompleteSearchService.paramsObj = {specId:this.selectedObj['id']};
          console.log(this.autocompleteSearchService.paramsObj);
          this.getHospitalsBySpecialities(this.selectedObj);
        }else if(this.selectedObj['type']=='hospital' && this.selectedObj['id']=='all'){
          this.autocompleteSearchService.searchType = 'search-hospitals-location-wise';
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
          this.getNearHospitals();
        }
        
        //this.getHospitalData(this.selectedObj["id"]);
        //this.getHospitalReviews(this.selectedObj["id"]);
        this.searchText = this.selectedObj['name'];
        
      }
      this.autocompleteSearchService.searchedData('').subscribe(data=>{
        console.log(data);
        this.hospitals = data;
      });
      this.autocompleteSearchService.showLoaderForSearchbar(true).subscribe(data=>{
        this.showLoader = data;
      });
    });
    
}
getHospitalsBySpecialities(selectedObj){
  let params = { 
    specId: selectedObj.id,
    limit: 'limit 0,20'
   };
  console.log(params);
  this.showLoader = true;
  this.authService.getHospitalsBySpeciality(params, true).subscribe((data) => {
    console.log(data);
    this.hospitals = data;
    this.showLoader = false;
  });
}
getNearHospitals(){
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
  this.showLoader = true;
  this.authService.getLocationWiseHospitals(params,true).subscribe((data) => {
      console.log(data);
      this.hospitals = data;
      this.showLoader = false;
  });
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
openHospitalPage(hospital){
  let obj = {"name":hospital.hospitalName,"id":hospital.hid,"type":"hospital"};
  let navigationExtras: NavigationExtras = { state: { data: obj }};
  this.router.navigate(['/hospital'],navigationExtras);
}
openBookingPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
}

}

