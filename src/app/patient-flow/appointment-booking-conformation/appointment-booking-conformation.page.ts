import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { AuthService } from '@app/_services';
import { truncateSync } from 'fs';
@Component({
  selector: 'app-appointment-booking-conformation',
  templateUrl: './appointment-booking-conformation.page.html',
  styleUrls: ['./appointment-booking-conformation.page.scss'],
})
export class AppointmentBookingConformationPage implements OnInit {
canGoBack: boolean = false;
bookingDetails:any;
doctor:any;
bookingDate:any;
timeSlot:any;
practoPromises:any;
showContent:boolean = false;
  constructor(private router:Router,
    private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
    this.route.queryParams.subscribe(params => {
    if (params && params.bookingDetails) {
      console.log(params.bookingDetails);
      this.bookingDetails = JSON.parse(params.bookingDetails);
    }
    });
    console.log(this.bookingDetails);

    this.doctor = this.bookingDetails.doctor;
    this.bookingDate = this.bookingDetails.bookingDate;
    this.timeSlot = this.bookingDetails.slot.time;
    this.getPractoPromises();
  }

  openAppointmentsPage(){
    this.router.navigateByUrl('/patient-appointments');
  }
  bookAppointment(){
    let params = {
      "pMobile": "7894561230",
      "docMobile": "321654987",
      "hid": "1",
      "fee": "200",
      "comment": "test Comment",
      "apDate": this.bookingDetails.bookingDate,
      "apTime":  this.bookingDetails.slot.time,
      "createdBy": "7894561230"
    }
    this.router.navigateByUrl('/patient-appointments');
    this.authService.addAppointment(params,true).subscribe(data=>{
      console.log(data);
      //this.appointments = data;
      //this.showContent = true;
    });    
  }

  getPractoPromises() {
    this.practoPromises = this.getPractoPromisesDemo();
    
    // this.authService.getPractoPractices(true).subscribe((data) => {
    //     console.log(data);
    //     this.practoPromises = data;
    //     this.showContent = true;      
    // });
    this.showContent = true;  
  }

  getPractoPromisesDemo(){
    return [
      {"title":"Appointment confirmed instantly with the doctor"},
      {"title":"We assure we will connect you to the doctor if your consultion does not happen for unforeseen reasons, we will give you 100% money back"},
      {"title":"Appointment confirmed instantly with the doctor"},
      {"title":"We assure we will connect you to the doctor if your consultion does not happen for unforeseen reasons, we will give you 100% money back"},
    ];
  }
}
