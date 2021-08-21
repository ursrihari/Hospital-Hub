import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-doctor-time-slot',
  templateUrl: './select-doctor-time-slot.page.html',
  styleUrls: ['./select-doctor-time-slot.page.scss'],
})
export class SelectDoctorTimeSlotPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openBookingConformationPage(){
    this.router.navigateByUrl('/appointment-booking-conformation');
  }

}
