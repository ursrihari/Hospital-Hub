import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { AccountService, AuthService } from '@app/_services';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment-booking-conformation',
  templateUrl: './appointment-booking-conformation.page.html',
  styleUrls: ['./appointment-booking-conformation.page.scss'],
})
export class AppointmentBookingConformationPage implements OnInit {
canGoBack: boolean = false;
bookingDetails:any;
bookingDate:any;
timeSlot:any;
practoPromises:any;
showContent:boolean = false;
showAppPromisesContent:boolean = false;
doctorData:any;
userDetails;
  constructor(private router:Router,
    private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private accountService:AccountService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
      this.userDetails = this.accountService.getUser();
      console.log(JSON.stringify(this.userDetails));
      console.log(this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
      this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
      console.log(JSON.stringify(this.doctorData));
      let bookingDate = this.router.getCurrentNavigation().extras.state.bookingDate;
      this.bookingDate = moment(bookingDate, "DD-MM-YYYY");
      console.log(JSON.stringify(this.bookingDate));
       this.timeSlot = this.router.getCurrentNavigation().extras.state.slot;
       console.log(JSON.stringify(this.timeSlot));
      let self=this;
       setTimeout(function(){
        self.showContent = true;
      },1000);
       
    }
    this.getPractoPromises();
  }

  openAppointmentsPage(){
    this.router.navigateByUrl('/patient-appointments');
  }
  bookAppointment(){
    let params = {
      "pMobile": this.userDetails.mobile,
      "pId": this.userDetails.uid,
      "docId": this.doctorData[0].doctorDetails.docId,
      "docMobile": "",
      "hid": this.doctorData[0].clinicAddress.hid,
      "fee": this.doctorData[0].doctorDetails.fee,
      "comment": "test Comment",
      "apDate": moment(this.bookingDate).format("DD-MM-YYYY"),
      "apTime":   this.timeSlot.time,
      "createdBy": this.userDetails.uid
    }
    console.log(JSON.stringify(params));
    
    this.authService.addAppointment(params,true).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/patient-appointments');
    });    
  }

  getPractoPromises() {
    //this.practoPromises = this.getPractoPromisesDemo();
    this.authService.getAppPractices(true).subscribe((data) => {
        console.log(data);
        this.practoPromises = data;
        this.showAppPromisesContent = true;      
    });
   //this.showContent = true;  
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
