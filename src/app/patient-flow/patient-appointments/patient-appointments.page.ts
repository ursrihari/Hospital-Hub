import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.page.html',
  styleUrls: ['./patient-appointments.page.scss'],
})
export class PatientAppointmentsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openAppointment(){
    this.router.navigateByUrl('/patient-appointment-details');
  }

}
