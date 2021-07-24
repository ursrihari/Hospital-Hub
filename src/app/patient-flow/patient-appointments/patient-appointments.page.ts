import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.page.html',
  styleUrls: ['./patient-appointments.page.scss'],
})
export class PatientAppointmentsPage implements OnInit {

  constructor(private router:Router,
    private alertController:AlertController) { }

  ngOnInit() {
  }
  openAppointment(){
    this.router.navigateByUrl('/patient-appointment-details');
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

}
