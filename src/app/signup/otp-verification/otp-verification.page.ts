import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../../_model/User';
import { first } from 'rxjs/operators';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
    mobile:any;
    otp:any = [];
    otpCounter=0;
    public smsTextmessage: string = '';
    public appHashString: string = '';
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    private menuCtrl:MenuController,
    private smsRetriever: SmsRetriever) { }

  ngOnInit() {
    this.mobile = parseInt(this.route.snapshot.paramMap.get('mobile'),10);
    console.log(this.mobile);
    this.otp=[];
// this.getHashCode();
    // this.getSMS();
  }
  ngOnDestroy() {
    for(var i=0;i<5;i++){
      this.otp[i]="";
    }
  }
  verifyOtp(){
    this.authService.setUser(this.mobile);
    console.log(this.route.snapshot.paramMap.get('mobile'));
    //this.router.navigateByUrl('/patient-home');
    if(this.mobile == '1111111111'){
      this.navCtrl.navigateRoot('patient-home');
    }else if(this.mobile == '2222222222'){
      this.navCtrl.navigateRoot('doctor-home');
    }else if(this.mobile == '3333333333'){
      this.navCtrl.navigateRoot('receptionist-home');
    }
    
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
    this.router.navigateByUrl('/login');
  }
  openHelpPage(){
    this.router.navigateByUrl('/help');
  }
  getHashCode() {
    this.smsRetriever.getAppHash()
      .then((res: any) => {
        this.appHashString = res;
        console.log(res);
      })
      .catch((error: any) => console.error(error));
  }

  getSMS() {
    this.smsRetriever.startWatching()
      .then((res: any) => {
        this.smsTextmessage = res.Message;
        var regex = /(?<!\d)\d{6}(?!\d)/;
        var matches = this.smsTextmessage.match(regex);  // creates array from matches
        if (matches){
          for(var i=0;i<matches[0].length;i++){
           this.otp[i]=matches[0][i];
         }
        } else {
          // No Digits found in the string.
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  getCheck(){
    var string = "Sent from your Twilio trail account - 924070 //gtjDse+ce";
    var regex = /(?<!\d)\d{6}(?!\d)/;
    var matches = string.match(regex);  // creates array from matches
     if (matches){
       for(var i=0;i<matches[0].length;i++){
        this.otp[i]=matches[0][i];
      }
     } else {
       
     }
  }
}
