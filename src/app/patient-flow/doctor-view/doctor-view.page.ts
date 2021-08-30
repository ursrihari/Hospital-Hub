import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.page.html',
  styleUrls: ['./doctor-view.page.scss'],
})
export class DoctorViewPage implements OnInit {
  @ViewChild('slides') slider: IonSlides;
  canGoBack: boolean = false;
  tabs:any=[];
  activeIndex;
  segment = 0;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }
  
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
    this.tabs = ["Today","Tomorrow","25th Aug","26th Aug","27th Aug","28th Aug","29th Aug","30th Aug","31th Aug"];
    this.activeIndex =0;
    
  }
  openBookAppointmentPage(){
    this.router.navigateByUrl('/select-doctor-time-slot');
  }
  openBookAppointmentConformationPage(){
    this.router.navigateByUrl('/appointment-booking-conformation');
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
