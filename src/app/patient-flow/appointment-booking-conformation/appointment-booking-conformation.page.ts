import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { AuthService } from '@app/_services';
@Component({
  selector: 'app-appointment-booking-conformation',
  templateUrl: './appointment-booking-conformation.page.html',
  styleUrls: ['./appointment-booking-conformation.page.scss'],
})
export class AppointmentBookingConformationPage implements OnInit {
canGoBack: boolean = false;
  constructor(private router:Router,private routerOutlet: IonRouterOutlet,
    private authService:AuthService) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
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
      "apDate": "2021-09-25",
      "apTime": "11:00 AM",
      "createdBy": "7894561230"
    }
    this.authService.addAppointment(params,true).subscribe(data=>{
      console.log(data);
      //this.appointments = data;
      //this.showContent = true;
    });    
  }
}
