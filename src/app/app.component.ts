import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
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
    private menuCtrl:MenuController
    ){
      this.authService.getUser().subscribe(user=> {
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
    switch(role) { 
      case 'patient': { 
        this.pages = [
          {title: 'Home', page: 'PatientHomePage', url:'patient-home', icon:'home'},
          {title: 'Appointments', page: 'PatientAppointmentsPage', url:'patient-appointments', icon:'home'},
          {title: 'Profile', page: 'PatientProfilePage', url:'patient-profile', icon:'home'}
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
}
