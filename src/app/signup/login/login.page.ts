import { Component, OnInit } from '@angular/core';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../../_model/User';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../country-code-modal/country-code-modal.page';
import { first } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { PhoneNumberValidatorService } from '../../_services/phone-number-validator.service';
//import { Globalization } from '@ionic-native/globalization/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { LoaderService  } from '@app/_services';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  country:any={
    mobile_number:'',
    country_code:'',
    iso_code:'',
    name:''
  }
  countries;
  numberValidators:any={
    disableButton: true,
    validNumber: true
  }
  public appHashString: string = '';
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  // radio_list = [
  //   {
  //     id: '1',
  //     name: '+965 Kuwait',
  //     value: '965',
  //     iso_code: 'KW'
  //   }, {
  //     id: '2',
  //     name: '+91 India',
  //     value: '91',
  //     iso_code: 'IN'
  //   }, {
  //     id: '3',
  //     name: '+966 Saudi Arabia',
  //     value: '966',
  //     iso_code: 'SA'
  //   }, {
  //     id: '4',
  //     name: '+967 Yemen',
  //     value: '967',
  //     iso_code: 'YE'
  //   }, {
  //     id: '5',
  //     name: '+968 Oman',
  //     value: '968',
  //     iso_code: 'OM'
  //   }
  // ];
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private phoneNumberValidator:PhoneNumberValidatorService,
    private menuCtrl:MenuController,
    private sim: Sim,
    private smsRetriever: SmsRetriever,
    private loader:LoaderService
  //  private globalization:Globalization
    ) { }

  ngOnInit() {
    // this.globalization.getPreferredLanguage()
    // .then(res => console.log(res))
    // .catch(e => console.log(e));
    //this.getCountryDetails();
    //this.getHashCode();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    //this.getCountries(true);
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
  getCountries(forceRefresh){
    this.loader.show();
    this.authService.getCountries(forceRefresh).subscribe( data=>{
      this.loader.hide();
      console.log(data);
      this.countries = data;
    });
  }
  loginUser(){
    if(this.country.mobile_number == "1111111111" || this.country.mobile_number == "2222222222" || this.country.mobile_number == "3333333333"){
      this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    }else{
      let params= {
        phoneno: Number(this.country.country_code)+this.country.mobile_number,
        hashCode: "//gtjDse+ce"
      }
      this.authService.login(params,false).subscribe( data=>{
        console.log(data);
        this.router.navigate(['/otp-verification', {mobile:this.country.country_code+this.country.mobile_number}]);
      });
    }
    

    //this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    //console.log(this.authService.isApp());
    // if(this.authService.isApp()){
    //   this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    // }else{
    //   if(this.country.mobile_number!=''){
    //     console.log(this.phoneNumberValidator.isValidNumberForRegion(this.country.mobile_number,this.country.iso_code),this.country.iso_code);
    //    if(this.phoneNumberValidator.isValidNumberForRegion(this.country.mobile_number,this.country.iso_code),this.country.iso_code){
    //       this.numberValidators.validNumber =true;
    //       console.log(this.route.snapshot.paramMap.get('mobile'));
    //       console.log(this.country.mobile_number);
    //       this.presentLoading();
    //       this.authService.login(this.country.country_code+this.country.mobile_number,this.appHashString)
    //               .pipe(first())
    //               .subscribe({
    //                   next: () => {
    //                       this.router.navigate(['/otp-verification', {mobile:this.country.mobile_number}]);
    //                   },
    //                   error: error => {
    //                      // this.alertService.error(error);
    //                       //this.loading = false;
    //                   }
    //               });
    //     }else {
    //      this.numberValidators.validNumber =false;
    //     };
    //   }
    // }
   
    console.log(this.country.mobile_number);
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
        this.country.country_code = selectedCountry.country_code;
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
  getCountryDetails(){
    this.sim.getSimInfo().then(
  (info) => {
   this.country.mobile_number=info.phoneNumber;
   this.countries.filter(obj =>{ 
     if(obj.iso_code.toLowerCase() == info.countryCode.toLowerCase()){
      console.log(JSON.stringify(obj));
      this.country.country_code=obj.value;
      this.country.iso_code=obj.iso_code;
      this.country.name=obj.name;
      this.country.country_code = obj.value;
      this.inputChange(this.country.mobile_number); 
     };
  });
  },
  (err) => console.log('Unable to get sim info: ', err)
);

this.sim.hasReadPermission().then(
  (info) => console.log('Has permission: ', info)
);

this.sim.requestReadPermission().then(
  () => console.log('Permission granted'),
  () => console.log('Permission denied')
);
  }
  getHashCode() {
    this.smsRetriever.getAppHash()
      .then((res: any) => {
        this.appHashString = res;
        console.log(res);
      })
      .catch((error: any) => console.error(error));
  }
}
