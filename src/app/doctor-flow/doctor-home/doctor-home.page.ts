import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openAppointments(value){
      this.router.navigateByUrl('/doctor-appointments');
  }
}
