import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '@app/_services';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  doctorsSlideOpts = { initialSlide: 0, speed: 400, loop:false, slidesPerView: 1.4, spaceBetween: 20, pagination: false };
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router,
    private route:ActivatedRoute,
    private launchNavigator:LaunchNavigator,
    private authService:AuthService) { }
  tabs:any=[];
  activeIndex;
  segment = 0;
  hospitalData = [];
  hospitalReviews = [];
  showContent:boolean= false;
  selectedHospital = {};
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.tabs = ["Today","Tomorrow","25th Aug","26th Aug","27th Aug","28th Aug","29th Aug","30th Aug","31th Aug"];
    this.activeIndex =0;
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedHospital = this.router.getCurrentNavigation().extras.state.data;
        console.log(JSON.stringify(this.selectedHospital));
        this.getHospitalData(this.selectedHospital["id"]);
        this.getHospitalReviews(this.selectedHospital["id"]);
      }
    });
}
openDoctorProfilePage(doctor){
  console.log(doctor);
  let navigationExtras: NavigationExtras = { state: { 
    data: {
      id: doctor.docId
    }
  }};
  this.router.navigate(['/doctor-view'],navigationExtras);
}
bookAppointmentPage(doctor){
  this.router.navigate(['/select-doctor-time-slot',{id: doctor.doctorId}]);
}
openDoctorsPageBySpeciality(speciality){
  let obj = {"name":speciality.specName,"id":speciality.specId,"type":"speciality"};
  let navigationExtras: NavigationExtras = { state: { data: obj }};
  this.router.navigate(['/patient-doctors-list'],navigationExtras);
}
openAllDoctorsInHospital(hospital){
  console.log(hospital);
  let obj = {"name":hospital.hospitalName,"id":hospital.hid,"type":"hospital"};
  let navigationExtras: NavigationExtras = { state: { data: obj }};
  this.router.navigate(['/patient-doctors-list'],navigationExtras);
}
openServicesListPage(hospital){
  let navigationExtras: NavigationExtras = { state: { data: this.selectedHospital }};
  this.router.navigate(['/hospital-services'],navigationExtras);
}

selectTab(index){
  this.activeIndex = index;
  console.log(this.activeIndex);
  //this.slider.slideTo(index);
}
segmentChanged() {
   document.getElementById("segment-" + this.activeIndex).scrollIntoView({
   behavior: 'smooth',
   block: 'center',
   inline: 'center'
 });
}
openGoogleMap(location){
  let lat = this.hospitalData[0].hospitalDetails.latitude;
  let long = this.hospitalData[0].hospitalDetails.longitude;
  this.launchNavigator.navigate([lat, long], {}).then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error));
}
getHospitalData(hospitalId){
  let params={
    hid:hospitalId
  }
  this.authService.getHospital(params,true).subscribe((data) => {
      console.log(data);
      this.hospitalData = data;
      this.showContent = true;      
  });
}
getHospitalReviews(hospitalId){
  let params={
    hid:hospitalId
  }
  this.authService.getHospitalReviews(params,true).subscribe((data) => {
      console.log(data);
      this.hospitalReviews = data;      
  });
}

}
