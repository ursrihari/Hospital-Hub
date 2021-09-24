import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '@app/_services';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-hospital-services',
  templateUrl: './hospital-services.page.html',
  styleUrls: ['./hospital-services.page.scss'],
})
export class HospitalServicesPage implements OnInit {

  canGoBack: boolean = false;
  specialities=[];
  specialitiesOriginal=[];
  showContent:boolean=false;
  selectedHospital={};
  searchText="";
  constructor(private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.route.queryParams.subscribe((params) => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedHospital = this.router.getCurrentNavigation().extras.state.data;
      console.log(JSON.stringify(this.selectedHospital));
      this.getSpecilitiesInHospital(this.selectedHospital["id"]);
    }else{
      this.getAllSpecilities();
    }
  });
  
}
openDoctorsListPage(speciality){
  let obj = {"name":speciality.specName,"id":speciality.specId,"type":"speciality"};
  let navigationExtras: NavigationExtras = { state: { data: obj }};
  this.router.navigate(['/patient-doctors-list'],navigationExtras);
}

getSpecilitiesInHospital(hospitalId){
  let params={
    hid:hospitalId
  }
  this.authService.getSpecialitiesInHospital(params,true).subscribe((data) => {
      console.log(data);
      this.specialitiesOriginal = data;
      this.specialities = data;
      this.showContent = true;      
  });
}
getAllSpecilities(){
  let params={
    limit:"0,200"
  }
  this.authService.getSpecialities(params,true).subscribe((data) => {
      console.log(data);
      this.specialitiesOriginal = data;
      this.specialities = data;
      this.showContent = true;      
  });
}

onPercentChange(text){
  this.specialities =  this.specialitiesOriginal.filter(
    (item) => {
      return item.specName.toLowerCase().includes(text.toLowerCase())
    }
  );
}

}
