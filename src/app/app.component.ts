import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'appointment-details';
  pages=[];
  constructor(private authService: AuthService,
    private menuCtrl:MenuController,
    private navCtrl: NavController
    ){
      this.authService.getUser().subscribe(user=> {
        user = {name: "", mobile: 1111111111, role: 0};
        if(user){
          if(user.role == 0){
            this.initializeApp('patient');
          }else if(user.role == 1){
            this.initializeApp('doctor');
          }else if(user.role == 2){
            this.initializeApp('receptionist');
          }
          this.menuCtrl.enable(true);
        }
      });
  }
  
  initializeApp(role){
    role= 'patient';
    switch(role) { 
      case 'patient': { 
        this.pages = [
          {title: 'Home', page: 'PatientHomePage', url:'patient-home', icon:'home-outline'},
          {title: 'Book Appointment', page: 'PatientAppointmentBookingPage', url:'patient-appointment-booking', icon:'alarm-outline'},
          {title: 'Appointments', page: 'PatientAppointmentsPage', url:'patient-appointments', icon:'document-text-outline'},
          {title: 'Doctors', page: 'PatientDoctorsListPage', url:'patient-doctors-list', icon:'fitness-outline'},
          {title: 'Hospitals', page: 'PatientHospitalsListPage', url:'patient-hospitals-list', icon:'trail-sign-outline'},
          {title: 'Favourites', page: 'PatientFavouritesPage', url:'patient-favourites', icon:'heart-outline'},
          {title: 'Notificaions', page: 'NotificationsPage', url:'notifications', icon:'notifications-circle-outline'},
          {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'settings-outline'}
        ];
         break; 
      } 
      case 'doctor': { 
        this.pages = [
          {title: 'Appointments', page: 'DoctorAppointmentsPage', url:'doctor-appointments', icon:'home'},
          {title: 'Profile', page: 'DoctorProfilePage', url:'doctor-profile', icon:'home'}
        ];
         break; 
      } 
      case 'receptionist': { 
        this.pages = [
          {title: 'Appointments', page: 'ReceptionistAppointmentsPage', url:'receptionist-appointments', icon:'home'},
          {title: 'Profile', page: 'ReceptionistProfilePage', url:'receptionist-profile', icon:'home'}
        ];
         break; 
      } 
   }
  }
  openProfile(){
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('patient-profile');
  }
}
