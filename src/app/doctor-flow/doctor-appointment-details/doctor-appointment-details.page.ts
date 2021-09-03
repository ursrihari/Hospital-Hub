import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/_services';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-doctor-appointment-details',
  templateUrl: './doctor-appointment-details.page.html',
  styleUrls: ['./doctor-appointment-details.page.scss'],
})
export class DoctorAppointmentDetailsPage implements OnInit {
  appointmentDetils:Object={};
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.getAppointmentDetails();
  }

  getAppointmentDetails(){
    let params = { 
      "apId": "1" 
     }
    this.authService.getAppointments(params,true).subscribe(data=>{
      console.log(data);
      this.appointmentDetils = data;
    });
  }

  async refreshData(event?) {
    let params = { 
      "apId": "1" 
     }
    const refresh = event ? true : false;
    this.authService.getAppointmentDetails(params,true).pipe(
      finalize(() => {        
        if (event) {
          event.target.complete();
        }
        let self = this;
      })
    ).subscribe(res => {      
      this.appointmentDetils = res;
    })
  }

}
