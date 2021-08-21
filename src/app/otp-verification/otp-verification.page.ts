import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { first } from 'rxjs/operators';

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
    this.authService.setUser();
    console.log(this.route.snapshot.paramMap.get('mobile'));
    //this.router.navigateByUrl('/patient-home');
    this.navCtrl.navigateRoot('patient-home');
    // this.authService.verifyOtp(this.mobile,this.otp)
    //         .pipe(first())
    //         .subscribe({
    //             next: (user) => {
    //               console.log(user);
    //                 if(user){
    //                   if(user.role == 0){
    //                     this.router.navigateByUrl('/patient-home');
    //                 }else if(user.role == 1){
    //                   this.router.navigateByUrl('/doctor-appointments');
    //                 }else if(user.role == 2){
    //                   this.router.navigateByUrl('/receptionist-appointments');
    //                 }
    //               }
    //             },
    //             error: error => {
    //                // this.alertService.error(error);
    //                 //this.loading = false;
    //             }
    //         });

    //   this.authService.verifyOtp(this.mobile,this.otp).subscribe(user=> {
    //     console.log(user);
    //   if(user){
    //     if(user.role == 0){
    //       this.router.navigateByUrl('/patient-home');
    //   }else if(user.role == 1){
    //     this.router.navigateByUrl('/doctor-appointments');
    //   }else if(user.role == 2){
    //     this.router.navigateByUrl('/receptionist-appointments');
    //   }
    // }
    // });
  }
  backToLoginPage(){
    this.navCtrl.pop();
  }
  openHelpPage(){
    this.router.navigateByUrl('/help');
  }
}
