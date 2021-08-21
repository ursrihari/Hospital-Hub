import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.page.html',
  styleUrls: ['./patient-appointment-details.page.scss'],
})
export class PatientAppointmentDetailsPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router,
    private alertController:AlertController) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

openGoogleMap(){
    alert("Google map will open");
}
openDoctorTimeSlotPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
}
cancelAppointment(){
      this.presentAlertConfirm();
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Cancel Appointment!',
    message: 'Are you want to cancel the Appointment?',
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

}
