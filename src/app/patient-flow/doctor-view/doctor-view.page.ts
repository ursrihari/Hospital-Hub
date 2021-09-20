import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { IonRouterOutlet, IonSlides } from "@ionic/angular";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { AuthService, GlobalValuesService } from "@app/_services";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: "app-doctor-view",
  templateUrl: "./doctor-view.page.html",
  styleUrls: ["./doctor-view.page.scss"],
})
export class DoctorViewPage implements OnInit {
  @ViewChild("slides") slider: IonSlides;
  canGoBack: boolean = false;
  tabs: any = [];
  activeIndex;
  segment = 0;
  doctorData = [];
  doctorReviews = [];
  showContent: boolean = false;
  timeSlots = [];
  daySlots = [];
  selectedDoctor = {};
  constructor(
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private authService: AuthService,
    private globalValues: GlobalValuesService,
    private route: ActivatedRoute,
    private launchNavigator: LaunchNavigator
  ) {}

  ngOnInit() {
    this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
    //this.tabs = ["Today","Tomorrow","25th Aug","26th Aug","27th Aug","28th Aug","29th Aug","30th Aug","31th Aug"];
    this.tabs = [];
    this.activeIndex = 0;
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedDoctor = this.router.getCurrentNavigation().extras.state.data;
        this.getDoctorDetails(this.selectedDoctor["id"]);
        this.getDoctorReviews(this.selectedDoctor["id"]);
      }
    });
  }
  openBookAppointmentPage() {
    let navigationExtras: NavigationExtras = { state: { doctorData: this.doctorData, daySlots:this.daySlots, timeSlots:this.timeSlots }};
    this.router.navigate(['/select-doctor-time-slot'],navigationExtras);

    //this.router.navigateByUrl("/select-doctor-time-slot");
  }
  openBookAppointmentConformationPage() {
    this.router.navigateByUrl("/appointment-booking-conformation");
  }
  openGoogleMap(location){
      let lat = this.doctorData[0].clinicAddress.latitude;
      let long = this.doctorData[0].clinicAddress.longitude;
      this.launchNavigator.navigate([lat, long], {}).then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error));
  }
  selectTab(index) {
    this.activeIndex = index;
    this.timeSlots = this.daySlots[index].slots;
  }
  segmentChanged() {
    document.getElementById("segment-" + this.activeIndex).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
  getDoctorDetails(id) {
    let params = {
      docId: id,
    };
    this.authService.getDoctorDetails(params, true).subscribe((data) => {
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
      this.selectTab(1);
    });
  }
  getDoctorReviews(doctorId) {
    let params = {
      docId: doctorId,
    };
    this.authService.getDoctorReviews(params, true).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.doctorReviews = data;
    });
  }

  /** Demo data */
  getDoctorDetailsDemo() {
    return [
      {
        doctorDetails: {
          doctorId: "1",
          doctorName: "Tejaswini Nayak",
          doctorImg: "assets/images/my-doctors/doctor-12.jpg",
          specialization: "Pediatrician",
          clinicName: "Chinmayi Child Care Clinic",
          isPrimeDoctor: true,
          experience: "26",
          rate_percentage: "96",
          no_of_patients: "153",
        },
        clinicAddress: {
          clinicName: "Chinmayi Child Care Clinic",
          location: "Bellandur",
          verifiedStatus: "Verified details",
        },
        timeSlots: [
          {
            date: "07-09-2021",
            slots: [
              { time: "09:00 AM", allocated: true },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "08-09-2021",
            slots: [
              { time: "09:00 AM", allocated: true },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "09-09-2021",
            slots: [
              { time: "09:00 AM", allocated: false },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "10-09-2021",
            slots: [
              { time: "09:00 AM", allocated: true },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "11-09-2021",
            slots: [
              { time: "09:00 AM", allocated: false },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "12-09-2021",
            slots: [
              { time: "09:00 AM", allocated: true },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "13-09-2021",
            slots: [
              { time: "09:00 AM", allocated: false },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
          {
            date: "14-09-2021",
            slots: [
              { time: "09:00 AM", allocated: true },
              { time: "10:00 AM", allocated: false },
              { time: "11:00 AM", allocated: false },
              { time: "12:00 AM", allocated: false },
              { time: "13:00 AM", allocated: false },
              { time: "09:00 AM", allocated: false },
            ],
          },
        ],
        recomendatations: [
          {
            title: "Doctor Friendliness",
            icon: "fa fa-heart-o",
            description:
              "93% patients find the doctor friendly and approachable",
          },
          {
            title: "Detailded Treatment Explanation",
            icon: "fa fa-comments-o",
            description:
              "89% patients recommend the doctor for in-depth explanation of their issues",
          },
        ],
        location: [
          {
            latitude: "",
            longitude: "",
          },
        ],
        abouDoctor:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        specializations: [
          "Oral and maxilloFacial Surgeon",
          "Implantologist",
          "Hair Transplant Surgoen",
        ],
        education: [
          "BDS - Ragiv Gandhi University of Health Sciences, Bengalore, India -2009",
          "MDS - Oral & Maxillofacial Surgery - Vydehi Institute Of Dental Sciences Research -2015",
        ],
        experiences: [
          "2010 - 2012 Senior Dental Surgeon at 32 Smiles Dental Clinic",
          "2012 -2015 Oral Surgeon at Vydehi Dental Hospital",
        ],
        registration: ["26101-A Karnataka State Dental Council, 2010"],
      },
    ];
  }

  getDoctorReviewsDemo() {
    return [
      {
        profileImg: "",
        name: "Vazeer Nayomi",
        date: "10-09-2021 10:20 AM",
        title: "Visited for Adolescent Followup & Vaccinations",
        text:
          "Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple",
      },
      {
        profileImg: "assets/images/hospital/img2.jpg",
        name: "Ramalinga",
        date: "10-09-2021 10:20 AM",
        title: "Visited for Adolescent Followup & Vaccinations",
        text:
          "Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple",
      },
      {
        profileImg: "",
        name: "Ramalinga",
        date: "10-09-2021 10:20 AM",
        title: "Visited for Adolescent Followup & Vaccinations",
        text:
          "Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple",
      },
      {
        profileImg: "assets/images/hospital/img2.jpg",
        name: "Ramalinga",
        date: "10-09-2021 10:20 AM",
        title: "Visited for Adolescent Followup & Vaccinations",
        text:
          "Really warm person! Took time to explain the situation-reasons, possiblity, etc. she went the extra mile and gave us a couple",
      },
    ];
  }
  /**Demo data */
}
