import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.page.html',
  styleUrls: ['./patient-home.page.scss'],
})
export class PatientHomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openAppointment(){
    this.router.navigateByUrl('/patient-appointment-details');
  }
  openDoctorsPage(){
    this.router.navigateByUrl('/patient-doctors-list');
  }
  openBookAppointmentPage(){
    this.router.navigateByUrl('/patient-appointment-booking');
  }
  openLabReportsPage(){
    this.router.navigateByUrl('/patient-hospitals-list');
  }
  openChattingPage(){
    this.router.navigateByUrl('/chat');
  }
  openDoctorConsultationPage(){
    this.router.navigateByUrl('/doctor-consult');
  }
  openNotificationsPage(){
    this.router.navigateByUrl('/notifications');
  }

}
