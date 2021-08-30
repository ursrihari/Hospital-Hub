import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-appointment-help',
  templateUrl: './appointment-help.page.html',
  styleUrls: ['./appointment-help.page.scss'],
})
export class AppointmentHelpPage implements OnInit {

  canGoBack: boolean = false;
  showReconfirmAppointmentComponent = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}

openReschuleAppointmentPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
}
openCancelAppointmentPage(){
  this.router.navigateByUrl('/appointment-cancel');
}
openReconfirmMyAppointment(){
  this.showReconfirmAppointmentComponent=true;
  this.router.navigateByUrl('/appointment-help');
}

}
