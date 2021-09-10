import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { AuthService } from '@app/_services';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.page.html',
  styleUrls: ['./my-doctors.page.scss'],
})
export class MyDoctorsPage implements OnInit {



canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router,
    private authService:AuthService) { }


  doctorsData = [];
  showContent:boolean= false; 
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
  this.getDoctorsData();                     
}
openDoctorProfilePage(){
  this.router.navigateByUrl('/doctor-view');
}
bookAppointmentPage(doctor){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      doctor: JSON.stringify(doctor)
    }
  };
  this.router.navigate(['/select-doctor-time-slot'], navigationExtras);
}

getDoctorsData() {
  this.doctorsData = this.getDoctorsDataDemo();
  let params={
    patientid:''
  }
  // this.authService.getMyDoctors(params,true).subscribe((data) => {
      // console.log(data);
      //this.hospitalData = data;
      //this.showContent = true;      
  // });
  this.showContent = true;
}

getDoctorsDataDemo(){
  return [ 
    {"id":"1","profileImg":"assets/images/my-doctors/doctor-12.jpg","name":"Dr. Tejaswini Nayak","specialization":"Pediatrician","clinic":"Chinmayi Child Care Clinic","isPrime":"1"},
    {"id":"2","profileImg":"assets/images/doctors/img5.jpg","name":"Dr. Ranjith","specialization":"Cardioligist","clinic":"Sapphire Clinic","isPrime":"1"},
    {"id":"3","profileImg":"assets/images/doctors/img2.jpg","name":"Dr. Nandhini","specialization":"Gynacology","clinic":"Trinity Clinic","isPrime":"1"},
    {"id":"4","profileImg":"assets/images/doctors/img3.jpg","name":"Dr. Joshua","specialization":"Optamalogist","clinic":"Akakansha Care Clinic","isPrime":"1"},
    {"id":"5","profileImg":"assets/images/doctors/img6.jpg","name":"Dr. Ashreya","specialization":"Gynacology","clinic":"Akakansha Care Clinic","isPrime":"1"},
    {"id":"6","profileImg":"assets/images/doctors/doctor-thumb-01.jpg","name":"Dr. Anusha","specialization":"Optamalogist","clinic":"Akakansha Care Clinic","isPrime":"0"},
    {"id":"7","profileImg":"assets/images/doctors/img4.jpg","name":"Dr. Catherine","specialization":"Optamalogist","clinic":"Akakansha Care Clinic","isPrime":"0"},
  ];
}

}
