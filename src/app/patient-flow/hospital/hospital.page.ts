import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,private router:Router) { }
  tabs:any=[];
  activeIndex;
  segment = 0;
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.tabs = ["Today","Tomorrow","25th Aug","26th Aug","27th Aug","28th Aug","29th Aug","30th Aug","31th Aug"];
    this.activeIndex =0;
}
openDoctorProfilePage(){
  this.router.navigateByUrl('/doctor-view');
}
bookAppointmentPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
}
openDoctorsListPage(){
  this.router.navigateByUrl('/patient-doctors-list');
}
openServicesListPage(){
  this.router.navigateByUrl('/hospital-services');
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

}
