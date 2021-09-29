import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { AuthService,AccountService } from '@app/_services';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { User } from '@app/_model';
import { CachingService } from './_services/caching.service';
//import { SplashScreen } from '@capacitor/splash-screen';
//import { StatusBar, Style } from '@capacitor/status-bar';
import { AppLauncher } from '@capacitor/app-launcher';

import { Router } from '@angular/router';
import { PatientHomePage } from './patient-flow/patient-home/patient-home.page';
import { DoctorHomePage } from './doctor-flow/doctor-home/doctor-home.page';
import { ReceptionistHomePage } from './receptioist-flow/receptionist-home/receptionist-home.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'appointment-details';
  UserPages=[];
  MenuPages=[];
  userProfile:object={};
  profileCompleteness;
  rootPage: any;
  constructor(private authService: AuthService,
    private menuCtrl:MenuController,
    private navCtrl: NavController,
    private accountService: AccountService,
    private platform: Platform,
    private router:Router,
    //private statusBar: StatusBar,
    //private splashScreen: SplashScreen,
    private cachingService: CachingService
    ){
      this.cachingService.initStorage();
      this.accountService.listenUser().subscribe(user=> {
        console.log(JSON.stringify(user));
        //let user = this.accountService.getUser();
        this.userProfile = {...user};
        this.profileCompleteness = this.accountService.profileCompleteness(user);
        if(user){
          this.initializeApp(this.userProfile['role_name']);
          this.menuCtrl.enable(true);
        }
      });
  }
  
  initializeApp(role){
    console.log(role)
   this.platform.ready().then(() => {
      //this.statusBar.overlaysWebView(true);
      //this.statusBar.backgroundColorByHexString('#0069b4');
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
      //this.splashScreen.show();
      // this.splashScreen.show({
      //   showDuration: 2000,
      //   autoHide: true
      // });
      if(role=='patient'){
        this.rootPage = PatientHomePage;
        this.navCtrl.navigateRoot(["/patient-home"], { skipLocationChange: true });
      }else if(role=='doctor'){
        this.rootPage = DoctorHomePage;
        this.navCtrl.navigateRoot(["/doctor-home"], { skipLocationChange: true }); 
      }else if(role=='receptionist'){
        this.rootPage = ReceptionistHomePage;
        this.navCtrl.navigateRoot(["/receptionist-home"], { skipLocationChange: true }); 
      }else{
        this.navCtrl.navigateRoot(["/login"], { skipLocationChange: true });
      }
    });
    //role= 'doctor';
    switch(role) { 
      case 'patient': { 

        this.UserPages = [
          {title: 'Home', page: 'PatientHomePage', url:'patient-home', icon:'fa fa-home'},
          {title: 'Appointments', page: 'PatientAppointmentsPage', url:'patient-appointments', icon:'fa fa-calendar'},
          {title: 'Test Bookings', page: 'TestBookingsPage', url:'test-bookings', icon:'fa fa-flask'},
          //{title: 'Consultations', page: 'ConsultationsPage', url:'consultations', icon:'fa fa-calendar'},
          {title: 'My Doctors', page: 'MyDoctorsPage', url:'my-doctors', icon:'fa fa-user-md'},
          {title: 'Medical Records', page: 'MedicalRecordsPage', url:'medical-records', icon:'fa fa-home'},
          //{title: 'Reminders', page: 'RemindersPage', url:'reminders', icon:'fa fa-clock-o'},
          {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
          {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
          {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'},
          {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'}
          
        ];
        // this.MenuPages = [
        //     {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
        //     {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
        //     {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'},
        //     {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'}
        // ];
         break; 
      } 
      case 'doctor': { 
        this.UserPages = [
          {title: 'Home', page: 'DoctorHomePage', url:'doctor-home', icon:'fa fa-home'},
          {title: 'Appointments', page: 'DoctorAppointmentsPage', url:'doctor-appointments', icon:'fa fa-calendar'},
          {title: 'My Patients', page: 'MyPatientsPage', url:'my-patients', icon:'fa fa-user-md'},
          {title: 'Schedule Timings', page: 'ScheduleTimingsPage', url:'schedule-timings', icon:'fa fa-hourglass-half'},
          {title: 'Reviews', page: 'ReviewsPage', url:'reviews', icon:'fa fa-star'},
          {title: 'Social Media', page: 'SocialMediaPage', url:'social-media', icon:'fa fa-share-square'},
          {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
          {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
          {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'},
          {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'}
        ];
      //   this.MenuPages = [
      //     {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
      //     {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
      //     {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'},
      //     {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'}
      // ];
         break; 
      } 
      case 'receptionist': { 
        this.UserPages = [
          {title: 'Home', page: 'ReceptionistHomePage', url:'receptionist-home', icon:'fa fa-home'},
          {title: 'Appointments', page: 'ReceptionistAppointmentsPage', url:'receptionist-appointments', icon:'fa fa-calendar'},
          {title: 'Medical Records', page: 'MedicalRecordsPage', url:'medical-records', icon:'fa fa-home'},
          {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
          {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
          {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'},
          {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'}
        ];
      //   this.MenuPages = [
      //     {title: 'Read about health', page: 'ReadAboutHealthPage', url:'read-about-health', icon:'fa fa-heartbeat'},
      //     {title: 'Hep Center', page: 'HelpCenterPage', url:'help-center', icon:'fa fa-question-circle'},
      //     {title: 'Like us? Give us 5 stars', page: 'like-us-give-5-star', url:'like-us-give-5-star', icon:'fa fa-thumbs-o-up'},
      //     {title: 'Settings', page: 'SettingsPage', url:'settings', icon:'fa fa-cog'}
          
      // ];
         break; 
      } 
   }
  }
  openMenuPage(pageurl){
    if(pageurl == 'like-us-give-5-star'){
        //alert("open playstore to give rating");
       AppLauncher.canOpenUrl({ url: 'com.facebook.katana' }).then(data=>{
         console.log(data);
       });
    }
    // else if(pageurl == 'read-about-health'){
    //   const openCapacitorSite = async () => {
    //     await Browser.open({ url: 'https://www.practo.com/healthfeed' });
    //   };
    // }
    else{
      this.navCtrl.navigateRoot(pageurl);
    }
      
  }
  openPractoPlus(){
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('explore-plus');
  }
  openProfile(){
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('patient-profile');
  }
  logout() {
    this.accountService.logout();
}
closeSidemenu(){
  this.menuCtrl.close();
}

}
