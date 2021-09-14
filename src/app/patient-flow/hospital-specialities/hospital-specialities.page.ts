import { Component, ElementRef, OnInit, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@app/_services";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { AutocompleteSearchService } from "@app/_services/autocomplete-search.service";
import { GlobalValuesService } from "@app/_services";
import { LocationPage } from "../location/location.page";
@Component({
  selector: "app-hospital-specialities",
  templateUrl: "./hospital-specialities.page.html",
  styleUrls: ["./hospital-specialities.page.scss"],
})
export class HospitalSpecialitiesPage implements OnInit {
  canGoBack: boolean = false;
  hospitals = [];
  specialities = [];
  location:object={};
  showContent: boolean = false;
  @ViewChildren ("searchInput") searchInput:ElementRef;
  constructor(
    private router: Router,
    private routerOutlet: IonRouterOutlet,
    private authService: AuthService,
    private modalController:ModalController,
    private globalValues:GlobalValuesService
  ) {
    this.getNearestHospitals();
  }

  ngOnInit() {
    this.globalValues.getLocation().subscribe(data=>{
      this.location = data;
    });
    this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
  }
  openHospitalsListPage() {
    this.router.navigateByUrl("/patient-hospitals-list");
  }
  openHospitalPage(hospital) {
    this.router.navigate(["/hospital",{id:hospital.hid}]);
  }
  openDoctorBookingPage() {
    this.router.navigateByUrl("/doctor-booking");

  }
  getNearestHospitals() {
    let params = { 
      pMobile: "7894561230",
      speciality:'',
      limit: '6'
     };
    this.globalValues.getLocation().subscribe(data=>{
      params['locationId'] = data.cityId;
      params['latitude'] = data.latitude;
      params['longitude'] = data.longitude;
      params['locationId'] = data.cityId;
    });
    console.log(params);
    this.authService.getHospitals(params, true).subscribe((data) => {
      console.log(data);
      this.hospitals = data;
      //this.hospitals = this.getHospitalListDemo();
      this.showContent = true;
      this.getHospitalSpecialities();
    });
  }
  getHospitalSpecialities() {
    this.authService.getSpecialities(true).subscribe((data) => {
      console.log(data);
      this.specialities = data;
      //this.specialities = this.getSpecialitiesListDemo();
      this.showContent = true;
    });
  }
  focusSearchInput(){
    this.searchInput['first'].nativeElement.focus();
  }
  async openLocationsModal() {
    const modal = await this.modalController.create({
      component: LocationPage,
      cssClass: 'location-modal',
      componentProps: { value: '', name:'', iso_code:'' }
    });
    modal.onDidDismiss().then((data:any) => {
      console.log(data.data);
      this.globalValues.getLocation().subscribe(data=>{
        if(data){
          this.location = data;  
        }
      });
    }); 
    return await modal.present();
  }







/* Sample data */
getHospitalListDemo(){
  return  [
            {
                "hid": "1",
                "hospitalName": "Gynaecology",
                "branchName": "hyderabad",
                "address": "hyderabad",
                "cityId": "1",
                "mobile": "9876543210",
                "hLogo": "assets/images/find-hospitals-near/img1.jpg",
                "hPlan": "gold",
                "addedDate": "0000-00-00 00:00:00.000000",
                "depIDs": "1,2",
                "extra": "1,2,3",
                "status": "1"
            },
            {
              "hid": "1",
              "hospitalName": "Neurology",
              "branchName": "hyderabad",
              "address": "hyderabad",
              "cityId": "1",
              "mobile": "9876543210",
              "hLogo": "assets/images/find-hospitals-near/img2.jpg",
              "hPlan": "gold",
              "addedDate": "0000-00-00 00:00:00.000000",
              "depIDs": "1,2",
              "extra": "1,2,3",
              "status": "1"
          },{
            "hid": "1",
            "hospitalName": "ENT",
            "branchName": "hyderabad",
            "address": "hyderabad",
            "cityId": "1",
            "mobile": "9876543210",
            "hLogo": "assets/images/find-hospitals-near/img3.jpg",
            "hPlan": "gold",
            "addedDate": "0000-00-00 00:00:00.000000",
            "depIDs": "1,2",
            "extra": "1,2,3",
            "status": "1"
        },{
          "hid": "1",
          "hospitalName": "Hospital name 4",
          "branchName": "hyderabad",
          "address": "hyderabad",
          "cityId": "1",
          "mobile": "9876543210",
          "hLogo": "assets/images/find-hospitals-near/img4.jpg",
          "hPlan": "gold",
          "addedDate": "0000-00-00 00:00:00.000000",
          "depIDs": "1,2",
          "extra": "1,2,3",
          "status": "1"
      },{
        "hid": "1",
        "hospitalName": "Hospital name 5",
        "branchName": "hyderabad",
        "address": "hyderabad",
        "cityId": "1",
        "mobile": "9876543210",
        "hLogo": "assets/images/find-hospitals-near/img5.jpg",
        "hPlan": "gold",
        "addedDate": "0000-00-00 00:00:00.000000",
        "depIDs": "1,2",
        "extra": "1,2,3",
        "status": "1"
    },{
      "hid": "1",
      "hospitalName": "Hospital name 6",
      "branchName": "hyderabad",
      "address": "hyderabad",
      "cityId": "1",
      "mobile": "9876543210",
      "hLogo": "assets/images/find-hospitals-near/img1.jpg",
      "hPlan": "gold",
      "addedDate": "0000-00-00 00:00:00.000000",
      "depIDs": "1,2",
      "extra": "1,2,3",
      "status": "1"
    },{
      "hid": "1",
      "hospitalName": "Hospital name 7",
      "branchName": "hyderabad",
      "address": "hyderabad",
      "cityId": "1",
      "mobile": "9876543210",
      "hLogo": "assets/images/find-hospitals-near/img1.jpg",
      "hPlan": "gold",
      "addedDate": "0000-00-00 00:00:00.000000",
      "depIDs": "1,2",
      "extra": "1,2,3",
      "status": "1"
    }
        ] 
}

getSpecialitiesListDemo(){
  return  [{specId: "1", specName: "Accident case", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "2", specName: "Anaesthetist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "3", specName: "Anatomic Pathologist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "4", specName: "Anesthesiologist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "5", specName: "Asthma & Allergy Specialist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "6", specName: "Audiologist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "7", specName: "Beauty Therapist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "8", specName: "Cardiologist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "9", specName: "Cardiothoracic Surgeon", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "10", specName: "Child & Adolescent Psychiatrist", iconUrl: "assets/images/speciality/img1.jpg", status: "1"},
  {specId: "11", specName: "Chiropractors", iconUrl: "assets/images/speciality/img1.jpg", status: "1"}]
}

}
