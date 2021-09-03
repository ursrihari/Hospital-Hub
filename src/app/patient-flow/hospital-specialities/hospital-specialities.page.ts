import { Component, ElementRef, OnInit, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@app/_services";
import { IonRouterOutlet } from "@ionic/angular";
import { AutocompleteSearchService } from "@app/_services/autocomplete-search.service";

@Component({
  selector: "app-hospital-specialities",
  templateUrl: "./hospital-specialities.page.html",
  styleUrls: ["./hospital-specialities.page.scss"],
})
export class HospitalSpecialitiesPage implements OnInit {
  canGoBack: boolean = false;
  hospitals = [];
  specialities = [];
  showContent: boolean = false;
  @ViewChildren ("searchInput") searchInput:ElementRef;
  constructor(
    private router: Router,
    private routerOutlet: IonRouterOutlet,
    private authService: AuthService
  ) {
    this.getNearestHospitals();
  }

  ngOnInit() {
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
      locationId: '',
      latitue: '',
      longitude: '',
      limit: ''
     };
    this.authService.getHospitals(params, true).subscribe((data) => {
      console.log(data);
      this.hospitals = data;
//       this.hospitals = [
//         {
//             "hid": "1",
//             "hospitalName": "Test 1",
//             "branchName": "hyderabad",
//             "address": "hyderabad",
//             "cityId": "1",
//             "mobile": "9876543210",
//             "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//             "hPlan": "gold",
//             "addedDate": "0000-00-00 00:00:00.000000",
//             "depIDs": "1,2",
//             "extra": "1,2,3",
//             "status": "1"
//         },
//         {
//           "hid": "1",
//           "hospitalName": "Test 2",
//           "branchName": "hyderabad",
//           "address": "hyderabad",
//           "cityId": "1",
//           "mobile": "9876543210",
//           "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//           "hPlan": "gold",
//           "addedDate": "0000-00-00 00:00:00.000000",
//           "depIDs": "1,2",
//           "extra": "1,2,3",
//           "status": "1"
//       },{
//         "hid": "1",
//         "hospitalName": "Test 3",
//         "branchName": "hyderabad",
//         "address": "hyderabad",
//         "cityId": "1",
//         "mobile": "9876543210",
//         "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//         "hPlan": "gold",
//         "addedDate": "0000-00-00 00:00:00.000000",
//         "depIDs": "1,2",
//         "extra": "1,2,3",
//         "status": "1"
//     },{
//       "hid": "1",
//       "hospitalName": "Test 4",
//       "branchName": "hyderabad",
//       "address": "hyderabad",
//       "cityId": "1",
//       "mobile": "9876543210",
//       "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//       "hPlan": "gold",
//       "addedDate": "0000-00-00 00:00:00.000000",
//       "depIDs": "1,2",
//       "extra": "1,2,3",
//       "status": "1"
//   },{
//     "hid": "1",
//     "hospitalName": "Test 5",
//     "branchName": "hyderabad",
//     "address": "hyderabad",
//     "cityId": "1",
//     "mobile": "9876543210",
//     "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//     "hPlan": "gold",
//     "addedDate": "0000-00-00 00:00:00.000000",
//     "depIDs": "1,2",
//     "extra": "1,2,3",
//     "status": "1"
// },{
//   "hid": "1",
//   "hospitalName": "Test 6",
//   "branchName": "hyderabad",
//   "address": "hyderabad",
//   "cityId": "1",
//   "mobile": "9876543210",
//   "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//   "hPlan": "gold",
//   "addedDate": "0000-00-00 00:00:00.000000",
//   "depIDs": "1,2",
//   "extra": "1,2,3",
//   "status": "1"
// },{
//   "hid": "1",
//   "hospitalName": "Test 7",
//   "branchName": "hyderabad",
//   "address": "hyderabad",
//   "cityId": "1",
//   "mobile": "9876543210",
//   "hLogo": "assets/images/find-hospitals-near/img1.jpg",
//   "hPlan": "gold",
//   "addedDate": "0000-00-00 00:00:00.000000",
//   "depIDs": "1,2",
//   "extra": "1,2,3",
//   "status": "1"
// }
//     ]
      this.showContent = true;
      this.getHospitalSpecialities();
    });
  }
  getHospitalSpecialities() {
    this.authService.getSpecialities(true).subscribe((data) => {
      console.log(data);
      this.specialities = data;
      this.showContent = true;
    });
  }
  focusSearchInput(){
    this.searchInput['first'].nativeElement.focus();
  }
}
