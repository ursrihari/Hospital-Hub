import { Component, OnInit } from '@angular/core';
import { NavController, IonMenu,MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../modal-pages/country-code-modal/country-code-modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mobilenumber:number;
  countrycode:any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute,
    public modalController: ModalController,
    private menuCtrl:MenuController) { }

  ngOnInit() {
    this.countrycode = "+965";
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  
  loginUser(){
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
    console.log(this.mobilenumber);
    
    this.router.navigate(['/otp-verification', {mobile:this.mobilenumber}]);
    //console.log(this.route.snapshot.paramMap.get('mobile'));
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CountryCodeModalPage,
      cssClass: 'country-code-modal'
    });
    return await modal.present();
  }

}
