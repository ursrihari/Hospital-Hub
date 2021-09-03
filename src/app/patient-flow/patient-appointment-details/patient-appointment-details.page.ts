import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/_services';
import { AlertController, IonRouterOutlet } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import * as moment from 'moment';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.page.html',
  styleUrls: ['./patient-appointment-details.page.scss'],
})
export class PatientAppointmentDetailsPage implements OnInit {
  canGoBack: boolean = false;
  appointmentDetils:Object={};
  showContent:boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router,
    private route:ActivatedRoute,
    private authService:AuthService,
    private alertController:AlertController,
    private launchNavigator: LaunchNavigator) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.getAppointmentDetails();
}



openDoctorTimeSlotPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
}
cancelAppointment(){
      //this.presentAlertConfirm();
}
openAppointmentHelpPage(){
  this.router.navigateByUrl('/appointment-help');
}
  getAppointmentDetails(){
    let params = { 
      "apId": this.route.snapshot.paramMap.get('id')
     }
    this.authService.getAppointmentDetails(params,true).subscribe(data=>{
      console.log(data);
      this.appointmentDetils = data[0];
      if(data[0].date !='' && data[0].time !=''){
        this.appointmentDetils['formated_date'] = new Date(""+data[0].date+" "+data[0].time);
        this.appointmentDetils['no_of_days'] = moment(new Date(""+data[0].date+" "+data[0].time), "YYYYMMDD").fromNow();
      }
      this.showContent = true;
    });
  }
  getDirections(){
    console.log("calling...");
      console.log(this.launchNavigator);
      console.log("calling... 2");
      this.launchNavigator.navigate("16.306, 80.436", {}).then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error));
    //   this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS), function(isAvailable){
    //     console.log(isAvailable);
    //     var app;
    //     if(isAvailable){
    //         app = this.launchNavigator.APP.GOOGLE_MAPS;
    //     }else{
    //         console.warn("Google Maps not available - falling back to user selection");
    //         app = this.launchNavigator.APP.USER_SELECT;
    //     }
    //     let options: LaunchNavigatorOptions = {
    //       app: app
    //     }
    //     this.launchNavigator.navigate("50.342847, -4.749904", options).then(
    //       success => console.log('Launched navigator'),
    //       error => console.log('Error launching navigator', error));
    // };
  }
  
}
