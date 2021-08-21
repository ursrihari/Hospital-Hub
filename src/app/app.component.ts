import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { AuthService,AccountService } from '@app/services';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { User } from '@app/model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'appointment-details';
  pages=[];
  user: User;
  user_role;
  constructor(private authService: AuthService,
    private menuCtrl:MenuController,
    private navCtrl: NavController,
    private accountService: AccountService,
     private platform: Platform
    //private statusBar: StatusBar,
     //private splashScreen: SplashScreen
    ){

      this.accountService.user.subscribe(x => this.user = x);

      this.authService.getUser().subscribe(user=> {
        console.log(user);
        //user = {name: "", mobile: 2222222222, role: 1};

        if(user){
          if(user.role == 0){
            this.initializeApp('patient');
            this.user_role = 0;
          }else if(user.role == 1){
            this.initializeApp('doctor');
            this.user_role = 1;
          }else if(user.role == 2){
            this.initializeApp('receptionist');
            this.user_role = 2;
          }
          this.menuCtrl.enable(true);
        }
      });
  }
  
  initializeApp(role){
   // this.platform.ready().then(() => {
      //this.statusBar.overlaysWebView(true);
      //this.statusBar.backgroundColorByHexString('#ffffff');
      //this.statusBar.styleDefault();
      // //this.splashScreen.hide();
      // //this.splashScreen.show();
      // this.splashScreen.show({
      //   showDuration: 2000,
      //   autoHide: true
      // });
    //});
    //role= 'doctor';
    switch(role) { 
      case 'patient': { 
        this.pages = [
          {title: 'Home', page: 'PatientHomePage', url:'patient-home', icon:'fa fa-home'},
          {title: 'Appointments', page: 'PatientAppointmentsPage', url:'patient-appointments', icon:'fa fa-calendar'},
          {title: 'Test Bookings', page: 'TestBookingsPage', url:'test-bookings', icon:'fa fa-flask'},
          {title: 'Orders', page: 'OrdersPAge', url:'orders', icon:'fa fa-home'},
          {title: 'Consultations', page: 'ConsultationsPage', url:'consultations', icon:'fa fa-calendar'},
          {title: 'My Doctors', page: 'MyDoctorsPage', url:'my-doctors', icon:'fa fa-user-md'},
          {title: 'Medical Records', page: 'MedicalRecordsPage', url:'medical-records', icon:'fa fa-home'},
          {title: 'Reminders', page: 'RemindersPage', url:'reminders', icon:'fa fa-clock-o'},

          // {title: 'Book Appointment', page: 'PatientAppointmentBookingPage', url:'patient-appointment-booking', icon:'alarm-outline'},
          // {title: 'My Favourites', page: 'PatientFavouritesPage', url:'patient-favourites', icon:'heart-outline'},
         // {title: 'Notificaions', page: 'NotificationsPage', url:'notifications', icon:'notifications-circle-outline'},
        //  {title: 'Chat', page: 'ChatUsersPage', url:'chat-users', icon:'chatbubbles-outline'}, 
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
  logout() {
    this.accountService.logout();
}
}
