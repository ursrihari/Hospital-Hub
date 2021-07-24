import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private router:Router, private PopoverCtrl:PopoverController) { }

  ngOnInit() {}
  openDoctorViewPage(){
    this.PopoverCtrl.dismiss();
    this.router.navigateByUrl('/doctor-view');
  }
  openDoctorBookingPage(){
    this.PopoverCtrl.dismiss();
    this.router.navigateByUrl('/doctor-booking');
  }
}
