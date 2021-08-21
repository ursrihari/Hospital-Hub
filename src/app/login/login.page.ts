import { Component, OnInit } from '@angular/core';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../modal-pages/country-code-modal/country-code-modal.page';
import { first } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PhoneNumberValidatorService } from '../services/phone-number-validator.service';
import { Globalization } from '@ionic-native/globalization/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  country:any={
    mobile_number:'',
    country_code:'+965',
    iso_code:'',
    name:''
  }
  numberValidators:any={
    disableButton: true,
    validNumber: true
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private phoneNumberValidator:PhoneNumberValidatorService,
    private menuCtrl:MenuController,
    private globalization:Globalization
    ) { }

  ngOnInit() {
    // this.globalization.getPreferredLanguage()
    // .then(res => console.log(res))
    // .catch(e => console.log(e));
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      duration: 50000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  loginUser(){
    this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    // if(this.country.mobile_number!=''){

    //   if(this.phoneNumberValidator.isValidNumberForRegion(this.country.mobile_number,this.country.iso_code),this.country.iso_code){
    //     this.numberValidators.validNumber =false;
    //   }else {
    //     this.numberValidators.validNumber =true;
    //   };
    // }
    // this.authService.login(this.user.name,this.user.pwd).then(success=>{
    //   if(success){
    //     console.log(success);
    //     if(this.authService.isPatient()){
    //        this.router.navigateByUrl('/patient-appointments');
    //     }else if(this.authService.isDoctor()){
    //       this.router.navigateByUrl('/doctor-appointments');
    //     }else if(this.authService.isReceptionist()){
    //       this.router.navigateByUrl('/receptionist-appointments');
    //     }
    //   }
    // }).catch(err=>{
    //   alert("wrong credentials");
    // });;
    // this.authService.login(this.user.name,this.user.pwd).subscribe(user=> {
    //   console.log(this.authService.isPatient());
    //   console.log(user);
    //   this.router.navigate(['/otp-verification', {queryParams:{mobile:this.mobilenumber}}]);
    //   // if(user.role == 0){
    //   //     this.router.navigateByUrl('/patient-appointments');
    //   // }else if(user.role == 1){
    //   //   this.router.navigateByUrl('/doctor-appointments');
    //   // }else if(user.role == 2){
    //   //   this.router.navigateByUrl('/receptionist-appointments');
    //   // }
    // });
    console.log(this.country.mobile_number);
    
     //this.router.navigate(['/otp-verification', {mobile:this.mobilenumber}]);
    //console.log(this.route.snapshot.paramMap.get('mobile'));
    // this.presentLoading();
    // this.authService.login(this.country.country_code+this.country.mobile_number)
    //         .pipe(first())
    //         .subscribe({
    //             next: () => {
    //                 this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    //             },
    //             error: error => {
    //                // this.alertService.error(error);
    //                 //this.loading = false;
    //             }
    //         });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CountryCodeModalPage,
      cssClass: 'country-code-modal',
      componentProps: { value: '', name:'', iso_code:'' }
    });
    modal.onDidDismiss().then((data:any) => {
      console.log(data.data);
      let selectedCountry = data.data.value;
      if(selectedCountry && selectedCountry.hasOwnProperty('country_code') && selectedCountry.country_code!=''){
        console.log(selectedCountry);
        this.country.country_code = '+'+selectedCountry.country_code;
        this.country.iso_code = selectedCountry.iso_code;
      }
      
    })
    
    return await modal.present();
  }
  inputChange(mobile_number){
    if(mobile_number.length > 9){
      this.numberValidators.disableButton =false;
    }
  }
  
}
