import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../../_model/User';
import { first } from 'rxjs/operators';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { AccountService } from '@app/_services';
import * as moment from 'moment';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
    mobile:any;
    otp:any = [];
    otpCounter=0;
    showResend:boolean = false;
    count:number=59;
    public smsTextmessage: string = '';
    public appHashString: string = '';
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    private menuCtrl:MenuController,
    private accountService:AccountService,
    private smsRetriever: SmsRetriever) { }

  ngOnInit() {
    this.mobile = this.route.snapshot.paramMap.get('mobile');
    let otp = this.route.snapshot.paramMap.get('otp');
    console.log(this.mobile);
    this.otp=[];
// this.getHashCode();
if(otp){
  let self= this;
  setTimeout(function(){
    self.populateOtp(otp);
  },3000);
  
}else{
  this.getSMS();
}
this.coundownTimer();
  }
  ngOnDestroy() {
    for(var i=0;i<5;i++){
      this.otp[i]="";
    }
  }
  verifyOtp(){
    let params= {
        phoneno: this.mobile,
        otp: this.convertArrayToNumber(this.otp)
      }
      this.authService.verifyOtp(params)
      .subscribe( response=>{
            console.log(response);
            let data = response.data;
            this.accountService.setUser(this.mobile,data);
            //localStorage.setItem('user', JSON.stringify(data));
            //this.authService.setUser(this.mobile,data);
              if(data){
                if(data.role_name == 'patient'){
                  this.router.navigateByUrl('/patient-home');
              }else if(data.role_name == 'doctor'){
                this.router.navigateByUrl('/doctor-appointments');
              }else if(data.role_name == 'receptionist'){
                this.router.navigateByUrl('/receptionist-appointments');
              }
            }
      });
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
  populateOtp(otp){
    console.log(otp);
    otp = ""+otp;
    for(var i=0;i<otp.length;i++){
      this.otp[i]=otp[i];
    }
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
  convertArrayToNumber(arr) {
    let result = ""
    for (var el of arr) {
        result += el
    }
    return result
}
coundownTimer(){
  this.count = 59;
  let self =this;
  var x = setInterval(function() {
    self.count = self.count -1;
    self.showResend = false;
    if (self.count <= 0) {
      clearInterval(x);
      self.showResend = true;
    }
  },1000);
}
resendOtp(){
  this.showResend = false;
  this.coundownTimer();
  let params= {
    phoneno: Number(this.mobile),
    hashCode: this.appHashString    //"//gtjDse+ce"
  }
  console.log(params);
  this.authService.login(params,true).subscribe( data=>{
    console.log(JSON.stringify(data));
    this.populateOtp(data.otp);
  });
}

}
