import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
    mobile:number;
    otp:number = 12345;
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    private menuCtrl:MenuController) { }

  ngOnInit() {
    this.mobile = parseInt(this.route.snapshot.paramMap.get('mobile'),10);
    console.log(this.mobile);
  }
  verifyOtp(){
    console.log(this.route.snapshot.paramMap.get('mobile'));
      this.authService.login(this.mobile,this.otp).subscribe(user=> {
        console.log(user);
      if(user){
        if(user.role == 0){
          this.router.navigateByUrl('/patient-home');
      }else if(user.role == 1){
        this.router.navigateByUrl('/doctor-appointments');
      }else if(user.role == 2){
        this.router.navigateByUrl('/receptionist-appointments');
      }
    }
    });
  }
  backToLoginPage(){
    this.navCtrl.pop();
  }
  openHelpPage(){
    this.router.navigateByUrl('/help');
  }
}
