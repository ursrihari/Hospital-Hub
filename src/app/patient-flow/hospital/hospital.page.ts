import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services';
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
    private authService:AuthService) { }
  tabs:any=[];
  activeIndex;
  segment = 0;
  hospitalData = [];
  hospitalRevies = [];
  showContent:boolean= false;
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.tabs = ["Today","Tomorrow","25th Aug","26th Aug","27th Aug","28th Aug","29th Aug","30th Aug","31th Aug"];
    this.activeIndex =0;
    this.getHospitalData();
    this.getHospitalReviews();
}
openDoctorProfilePage(doctor){
  this.router.navigate(['/doctor-view',{id: doctor.doctorId}]);
}
bookAppointmentPage(doctor){
  this.router.navigate(['/select-doctor-time-slot',{id: doctor.doctorId}]);
}
openDoctorsListPage(service){
  this.router.navigate(['/patient-doctors-list',{id:service.serviceId,name:service.serviceName}]);
}
openAllDoctorsInHospital(hospitalid){
  this.router.navigate(['/patient-doctors-list',{id:hospitalid}]);
}
openServicesListPage(hospitalId){
  this.router.navigate(['/hospital-services',{id:hospitalId}]);
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

getHospitalData(){
  this.hospitalData = this.getHospitalDataDemo();
  let params={
    hospitalid:''
  }
  this.authService.getHospital(params,true).subscribe((data) => {
      console.log(data);
      //this.hospitalData = data;
      //this.showContent = true;      
  });
  this.showContent = true;
}
getHospitalReviews(){
  this.hospitalRevies = this.getHospitalReviewsDemo();
  let params={
    hospitalid:''
  }
  this.authService.getHospitalReviews(params,true).subscribe((data) => {
      console.log(data);
      //this.hospitalRevies = data;      
  });
}


/**Demo data */
getHospitalDataDemo(){
return [{
  images:["assets/images/hospital/hospital-img.jpg","assets/images/hospital/hospital-profile-2.jpeg","assets/images/hospital/hospital-profile-3.jpeg"],
  services: [
    {image:'assets/images/hospital/img2.jpg',serviceName:'Womens<br/>Health'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Skin & Hair'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Child<br/>Specialist'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'General<br/>Physician'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Brain and<br/>Nerves'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Uriniary<br/>Issues'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Kidney<br/>Issues'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Ayurveda'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Womens<br/>Health'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Skin & Hair'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Child<br/>Specialist'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'General<br/>Physician'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Brain and<br/>Nerves'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Uriniary<br/>Issues'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Kidney<br/>Issues'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Ayurveda'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Skin & Hair'},
    {image:'assets/images/hospital/img2.jpg',serviceName:'Child<br/>Specialist'}
  ],
  doctors:[
    {image:'assets/images/doctors/img1.jpg',name:'James Adult',specialization:'Geriatrician',experience:'18 Years',location:'HSR Layout',rate_percentage:'96'},
    {image:'assets/images/doctors/img2.jpg',name:'James Alison',specialization:'Geriatrician',experience:'19 Years',location:'HSR Layout',rate_percentage:'80'},
    {image:'assets/images/doctors/img3.jpg',name:'Sharat Honnat',specialization:'Geriatrician',experience:'18 Years',location:'HSR Layout',rate_percentage:'96'},
    {image:'assets/images/doctors/img4.jpg',name:'Sharat Honnat',specialization:'Geriatrician',experience:'19 Years',location:'HSR Layout',rate_percentage:'80'},
    {image:'assets/images/doctors/img1.jpg',name:'James Adult',specialization:'Geriatrician',experience:'18 Years',location:'HSR Layout',rate_percentage:'96'},
    {image:'assets/images/doctors/img2.jpg',name:'James Alison',specialization:'Geriatrician',experience:'19 Years',location:'HSR Layout',rate_percentage:'80'}
  ],
  recomendatations:[
    {title:'Doctor Friendliness', icon:'fa fa-heart-o',description:'93% patients find the doctor friendly and approachable'},
    {title:'Detailded Treatment Explanation',icon:'fa fa-comments-o',description:'89% patients recommend the doctor for in-depth explanation of their issues'},
  ],
  location:[{latitude:'',longitude:''}],
  aboutHospital:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
}];
}
getHospitalReviewsDemo(){
  return [
    {profileImg:'',name:'Vazeer Nayomi',date:'10-09-2021 10:20 AM',title:'Visited for Adolescent Followup & Vaccinations',text:'Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple'},
    {profileImg:'assets/images/hospital/img2.jpg',name:'Ramalinga',date:'10-09-2021 10:20 AM',title:'Visited for Adolescent Followup & Vaccinations',text:'Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple'},
    {profileImg:'',name:'Ramalinga',date:'10-09-2021 10:20 AM',title:'Visited for Adolescent Followup & Vaccinations',text:'Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple'},
    {profileImg:'assets/images/hospital/img2.jpg',name:'Ramalinga',date:'10-09-2021 10:20 AM',title:'Visited for Adolescent Followup & Vaccinations',text:'Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple'}
  ];
}
/**Demo data */

}
