import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '@app/_services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-canceled-appointments-tab',
  templateUrl: './canceled-appointments-tab.page.html',
  styleUrls: ['./canceled-appointments-tab.page.scss'],
})
export class CanceledAppointmentsTabPage implements OnInit {

  appointments=[];
  showContent:boolean = false;
  constructor(private router:Router,
    private alertController:AlertController,
    private authService:AuthService) { }

  ngOnInit() {
    this.getAppointments();
  }
  
  openAppointment(appointment){
    this.router.navigate(['/patient-appointment-details', {id:appointment.apId}]);
  }

  async presentCancleAppointmentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Appointment Cancel',
      message: 'Are you want to cancel the appointment ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  openDoctorBookingPage(){
    this.router.navigateByUrl('/doctor-booking');
  }

  getAppointments(){
    let params = {
      "pMobile":"7894561230", 
      "apType":"cancelled" 
    }
    this.authService.getAppointments(params,true).subscribe(data=>{
      console.log(data);
      this.appointments = data;
      this.showContent = true;
    });
  }

  async refreshData(event?) {
    let params = {
      "pMobile":"7894561230", 
      "apType":"cancelled" 
    }
    const refresh = event ? true : false;
    this.showContent = false;
    this.authService.getAppointments(params,true).pipe(
      finalize(() => {        
        if (event) {
          event.target.complete();
        }
        
      })
    ).subscribe(res => {      
      this.appointments = res;
      this.showContent = true;
    })
  }
}