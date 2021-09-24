import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { IonRouterOutlet,IonSlides } from '@ionic/angular';
import { AuthService, GlobalValuesService } from '@app/_services';
import * as internal from 'stream';

@Component({
  selector: 'app-select-doctor-time-slot',
  templateUrl: './select-doctor-time-slot.page.html',
  styleUrls: ['./select-doctor-time-slot.page.scss'],
})
export class SelectDoctorTimeSlotPage implements OnInit {
  canGoBack: boolean = false;
  doctor:any={"name":"","profileImg":""};
  constructor(private router:Router,
    private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private globalValues:GlobalValuesService,
    private route:ActivatedRoute) {
      
    }

    @ViewChild('slides') slider: IonSlides;
    doctorData = [];
    timeSlots = [];
    daySlots = [];
    selectedDate;
    selectedSlots=[];
    selectedAvaialbleSlots = 0;
    showContent:boolean = false;
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //this.doctorData = this.router.getCurrentNavigation().extras.state.id;
        console.log(JSON.stringify(this.router.getCurrentNavigation().extras.state.id));
        //this.daySlots = this.router.getCurrentNavigation().extras.state.daySlots;
        //this.timeSlots = this.router.getCurrentNavigation().extras.state.timeSlots;
        //this.showContent = true;
        this.getDoctorDetails(this.router.getCurrentNavigation().extras.state.id);
      }
    });

    // this.route.queryParams.subscribe(params => {
    //   console.log(JSON.stringify(params.doctor));
    // if (params && params.doctor) {
    //   this.doctor = JSON.parse(params.doctor);
    //   console.log(JSON.stringify(this.doctor));
    // }
    // });
        
   // this.showContent = true;
   // this.selectedDate =  "2021-09-10";
   // this.selectedAvaialbleSlots = 10;
   // this.selectedSlots =  [{"time":"09:00 AM","allocated":true}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}];
   // console.log(this.selectedDate);
   // this.getDoctorTimeSlots(this.doctor.id);
   
}
getDoctorDetails(id) {
  let params = {
    docId: id,
  };
  this.authService.getDoctorDetails(params, false).subscribe((data) => {
    this.showContent = true;
    this.doctorData = data;
    var timeSlotObject = {
      nextSlot: data[0].timeSlots.timeInterval,
      breakTime: [
        [data[0].timeSlots.breakTimeStart, data[0].timeSlots.breakTimeEnd],
      ],
      startTime: data[0].timeSlots.AppointmentStartTime,
      endTime: data[0].timeSlots.AppointmentEndTime,
    };
    this.daySlots = this.globalValues.getTimeSlots(timeSlotObject);
    //this.timeSlots = this.daySlots[0].slots;
    this.avaialbleSlots(this.daySlots[0]);
  });
}
avaialbleSlots(day) {
  console.log(day);
  this.selectedDate = day.date;
  //this.selectedSlots = day.slots;
  //this.selectedAvaialbleSlots = day.avaialableSlots;
  this.timeSlots = day.slots;
}
  openBookingConformationPage(slot){
    if(!slot.allocated){
      let navigationExtras: NavigationExtras = { state: { 
        doctorData:this.doctorData,
        bookingDate:this.selectedDate, 
        slot:slot
      }};
      this.router.navigate(['/appointment-booking-conformation'], navigationExtras);
      // this.router.navigateByUrl('/appointment-booking-conformation');
    }
    
  }

  getDoctorTimeSlots(id){
   //this.timeSlots = this.getDoctorTimeSlotsDemo();
    let params={
      doctorid:id
    }
    this.authService.getDoctorTimeSlots(params,true).subscribe((data) => {
        console.log(data);
        this.timeSlots = data;
        this.showContent = true;      
    });
   // this.showContent = true;  
  }

  getDoctorTimeSlotsDemo() {
      return  [
        {"date":"2021-09-10","avaialableSlots":10, "slots": [{"time":"09:00 AM","allocated":true}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-11","avaialableSlots":15, "slots": [{"time":"09:00 AM","allocated":true},{"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-12","avaialableSlots":5, "slots": [{"time":"09:00 AM","allocated":false}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-13","avaialableSlots":8, "slots": [{"time":"09:00 AM","allocated":true},{"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-14","avaialableSlots":12, "slots": [{"time":"09:00 AM","allocated":false}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-15", "avaialableSlots":14,"slots": [{"time":"09:00 AM","allocated":true},{"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
        {"date":"2021-09-16", "avaialableSlots":5,"slots": [{"time":"09:00 AM","allocated":false}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]},
      ];
  }

  

}
