import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, AuthService } from '@app/_services';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {
  data=[];
  showContent:boolean = false;
  appInformarion={};
  constructor(private router:Router, 
    private accountService:AccountService,
    private authService:AuthService) { }

  ngOnInit() {
    let user = this.accountService.getUser();
    console.log(user);
    this.getHomePageData(user.uid);
    this.getAppInformation();
  }
  getHomePageData(id){
    let params ={
      docId: id
    }
      this.authService.getDoctorHomePageData(params,true).subscribe(data=>{
          console.log(data);
          this.data = data;
          this.showContent = true;
      });
  }
  getAppInformation(){
    this.authService.getAppInformation(true).subscribe(data=>{
      this.appInformarion = data[0];
      console.log(JSON.stringify(data));
    });
  }
  openAppointments(value){
      this.router.navigateByUrl('/doctor-appointments');
  }

}
