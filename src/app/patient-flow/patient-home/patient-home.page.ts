import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalValuesService,AuthService } from '@app/_services';

import { ModalController } from '@ionic/angular';
import { LocationPage } from "../location/location.page";

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.page.html',
  styleUrls: ['./patient-home.page.scss'],
})
export class PatientHomePage implements OnInit {
  spotlightSlideOpts = { initialSlide: 0, speed: 400, loop:true, slidesPerView: 1.5, spaceBetween: 10 };
  doctorsSlideOpts = { initialSlide: 0, speed: 400, loop:true, slidesPerView: 1.4, spaceBetween: 20, pagination: false };
  hospitalsSlideOpts = { initialSlide: 0, speed: 400, loop:true, slidesPerView: 1.2, spaceBetween: 5, pagination: false };
  questionsSlideOpts = { initialSlide: 0, speed: 400, loop:true, slidesPerView: 1.4, spaceBetween: 5, pagination: false };
  canGoBack: boolean = false;
  location:object={cityName:''};
  nearDoctors = [];
  nearHospitals = [];
  questions = [];
  covidSymptoms = [];
  symptoms = [];
  offers = [];
  showOffersContent:boolean = false;
  showDoctorsContent:boolean = false;
  showHospitalsContent:boolean = false;
  showQuestionsContent:boolean = false;
  showCovidSymptomsContent:boolean = false;
  showSymptomsContent:boolean = false;

  homePageData=[];
  findNearHospital = {};
  findNearDoctor={};
  covidAssists={};
  spolights=[];
  commonDeseaseSymptoms=[];
  constructor(private router:Router,
    public modalController: ModalController,
    private authService:AuthService,
    private globalValues:GlobalValuesService) { }

  ngOnInit() {
    this.globalValues.getLocation().subscribe(data=>{
      console.log(data);
      if(data){
        this.location = data;
      }
    });
    this.getCovodSymptoms();
    this.getCommonDeseaseSymptoms();
    //this.getCovodSymptoms();
    //this.getOffers();
    //this.getNearDoctors();
    //this.getNearHospitals();
    //this.getQuestions();
    this.getHomePageData();
  }
  getHomePageData(){
    this.authService.getHomePageData(true).subscribe(data=>{
        console.log(data);
        this.homePageData = data;
        if(data.length>0){
            data.forEach(element => {
              if(element.type=='covid_assits'){
                this.covidAssists = element;
              }
              if(element.type=='find_doctors'){
                this.findNearDoctor = element;
              }
              if(element.type=='find_hospitals'){
                this.findNearHospital = element;
              }
              if(element.type=='spotlight'){
                this.spolights.push(element);
              }
            });
        }
    });
  }

  getCovodSymptoms(){
    this.authService.getCovidSymptoms(true).subscribe(data=>{
      this.covidSymptoms = data;
     // console.log(JSON.stringify(data));
    });
  }
  getCommonDeseaseSymptoms(){
    this.authService.getDiseaseSymptoms(true).subscribe(data=>{
      this.commonDeseaseSymptoms = data;
      //console.log(JSON.stringify(data));
    });
  }
  openCovidAssistncePage(){
    this.router.navigateByUrl('/covid-assist');
  }
  openAppointment(){
    this.router.navigateByUrl('/patient-appointment-details');
  }
  openDoctorsPage(){
    //this.router.navigateByUrl('/patient-doctors-list');
    this.router.navigateByUrl('/doctors-speciality');
  }
  openBookAppointmentPage(){
    this.router.navigateByUrl('/patient-appointment-booking');
  }
  openLabReportsPage(){
    this.router.navigateByUrl('/patient-hospitals-list');
  }
  openChattingPage(){
    this.router.navigateByUrl('/chat');
  }
  openDoctorConsultationPage(){
    this.router.navigateByUrl('/doctor-consult');
  }
  openNotificationsPage(){
    this.router.navigateByUrl('/notifications');
  }
  openHospitalsPage(){
    //this.router.navigateByUrl('/patient-hospitals-list');
    this.router.navigateByUrl('/hospital-specialities');
  }
  
  openPaymentsPage(){
    this.router.navigateByUrl('/payments-health-cash');
  }
  openExplorePlusPage(){
    this.router.navigateByUrl('/explore-plus');
  }
  async openLocationsModal() {
    const modal = await this.modalController.create({
      component: LocationPage,
      cssClass: 'location-modal',
      componentProps: { value: '', name:'', iso_code:'' }
    });
    modal.onDidDismiss().then((data:any) => {
      console.log(data.data);
      this.globalValues.getLocation().subscribe(data=>{
        if(data){
          this.location = data;  
        }
      });
    }); 
    return await modal.present();
  }
  
    // getOffers(){
    //   //this.offers = this.getOffersDemo();
    //    this.authService.getOffers(true).subscribe((data) => {
    //       console.log(data);
    //       this.offers = data;
    //       this.showOffersContent = true;      
    //   });
    //  // this.showOffersContent = true;   
    // }

    // getOffersDemo(){
    //   return [
    //     {"offerImage":"assets/images/spotlight-carousel/img1.jpg"},
    //     {"offerImage":"assets/images/spotlight-carousel/img2.jpg"},
    //     {"offerImage":"assets/images/spotlight-carousel/img3.jpg"},
    //     {"offerImage":"assets/images/spotlight-carousel/img4.jpg"},
    //     {"offerImage":"assets/images/spotlight-carousel/img3.jpg"},
    //     {"offerImage":"assets/images/spotlight-carousel/img4.jpg"}
    //   ];
    // }

    getNearDoctors(){
     // this.nearDoctors = this.getNearDoctorsDemo();
      let params={
        location:''
      }
      this.authService.getNearDoctors(params,true).subscribe((data) => {
          console.log(data);
          this.nearDoctors = data;
          this.showDoctorsContent = true;      
      });
      this.showDoctorsContent = true;  
    }

    getCovidSymptoms(){
      //this.covidSymptoms = this.getCovidSymptomsDemo();
      
      this.authService.getCovidSymptoms(true).subscribe((data) => {
          console.log(data);
          this.covidSymptoms = data;
          this.showCovidSymptomsContent = true;      
      });
      
      //this.showCovidSymptomsContent = true;
    }

    getCovidSymptomsDemo(){
      return [
        {"title":"Fever","image":"assets/images/Dental.svg"},
        {"title":"Dry Cough","image":"assets/images/Heart.svg"},
        {"title":"Tiredness","image":"assets/images/Kidney.svg"},
        {"title":"Runny Nose","image":"assets/images/Lungs.svg"},
        {"title":"Sore Throat","image":"assets/images/corona-symp/img5.jpg"},
        {"title":"Pneumonia","image":"assets/images/corona-symp/img6.jpg"},
        {"title":"Corona Virus","image":"assets/images/corona-symp/img7.jpg"},
        {"title":"Breathing Dif..","image":"assets/images/corona-symp/img7.jpg"},
      ];
    }

    getSymptoms(){
      //this.symptoms = this.getSymptomsDemo();
      
      this.authService.getSymptoms(true).subscribe((data) => {
          console.log(data);
          this.symptoms = data;
          this.showSymptomsContent = true;      
      });
      
      this.showSymptomsContent = true;
    }

    getSymptomsDemo(){
      return [
        {"title":"Fever","image":"assets/images/corona-symp/img1.jpg"},
        {"title":"Dry Cough","image":"assets/images/corona-symp/img2.jpg"},
        {"title":"Tiredness","image":"assets/images/corona-symp/img3.jpg"},
        {"title":"Runny Nose","image":"assets/images/corona-symp/img4.jpg"},
        {"title":"Sore Throat","image":"assets/images/corona-symp/img5.jpg"},
        {"title":"Pneumonia","image":"assets/images/corona-symp/img6.jpg"},
        {"title":"Corona Virus","image":"assets/images/corona-symp/img7.jpg"},
        {"title":"Breathing Dif..","image":"assets/images/corona-symp/img7.jpg"},
      ];
    }

    getNearDoctorsDemo(){
      return [
        {"id":"1","name":"Dr.Sharat Honnat","image":"assets/images/doctors/img3.jpg","specialization":"Cardiologist","location":"HSR Layout","rating":"96%","experience":"18 Years Exp"},
        {"id":"1","name":"Dr.Nandhini","image":"assets/images/doctors/doctor-thumb-01.jpg","specialization":"Gynacologist","location":"Hyderabad","rating":"76%","experience":"22 Years Exp"},
        {"id":"1","name":"Dr.Bryson","image":"assets/images/doctors/doctor-thumb-02.jpg","specialization":"Pediatrcian","location":"Vizag","rating":"86%","experience":"21 Years Exp"},
        {"id":"1","name":"Dr.Joshua","image":"assets/images/doctors/img1.jpg","specialization":"Optamologist","location":"Mumbai","rating":"96%","experience":"25 Years Exp"},
        {"id":"1","name":"Dr.Catherine","image":"assets/images/doctors/img2.jpg","specialization":"Physician","location":"Delhi","rating":"76%","experience":"30 Years Exp"},
        {"id":"1","name":"Dr.Florance","image":"assets/images/doctors/img4.jpg","specialization":"Cardiologist","location":"Ahmedabad","rating":"95%","experience":"32 Years Exp"},
        {"id":"1","name":"Dr.Shawn","image":"assets/images/doctors/img5.jpg","specialization":"Nephrologist","location":"Gujrat","rating":"88%","experience":"12 Years Exp"},
        {"id":"1","name":"Dr.Ashreya","image":"assets/images/doctors/img6.jpg","specialization":"Pediatrcian","location":"Tamilnadu","rating":"76%","experience":"18 Years Exp"}
      ]
    }

   

    getNearHospitals(){
      //this.nearHospitals = this.getNearHospitalsDemo();
      let params={
        location:''
      }
      this.authService.getNearHospitals(params,true).subscribe((data) => {
          console.log(data);
          this.nearHospitals = data;
          this.showHospitalsContent = true;      
      });
      //this.showHospitalsContent = true;     
    }

    getNearHospitalsDemo(){
      return [
        {"id":"1","name":"Motherhood Hospital","image":"assets/images/hospitals/img1.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"2","name":"Appollo Hospital","image":"assets/images/hospitals/img2.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"3","name":"Mahaveer Hospital","image":"assets/images/hospitals/hospital1.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"4","name":"Franklins Hospital","image":"assets/images/hospitals/hospital2.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"5","name":"Geetha Hospital","image":"assets/images/hospitals/hospital3.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"6","name":"Shenoy Hospital","image":"assets/images/hospitals/img1.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"7","name":"GFC Hospital","image":"assets/images/hospitals/img2.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"},
        {"id":"8","name":"David Hospital","image":"assets/images/hospitals/hospital2.jpg","type":"Multispeciality Hospital","location":"Indiranagar","rating":"4.5","ratingCount":"1125","no_of_doctors":"20"}
      ];
    }

    getQuestions(){
      //this.questions = this.getQuestionsDemo();
      
      this.authService.getQuestions(true).subscribe((data) => {
          console.log(data);
          this.questions = data;
          this.showQuestionsContent = true;      
      });
      this.showQuestionsContent = true;     
    }

    getQuestionsDemo(){
      return [
        {"id":"1","title":"CLAMP SUSPENSION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for Fe...","date":"2021-09-01","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"1","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"}]},
        {"id":"2","title":"DROPS SUSPENSION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for CA...","date":"2021-09-07","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"2","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"},{"profileImg":"assets/images/doctors/doctor-thumb-02.jpg"}]},
        {"id":"3","title":"SYRUP SUSPENSION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for PA...","date":"2021-08-01","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"3","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"},{"profileImg":"assets/images/doctors/doctor-thumb-02.jpg"},{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"}]},
        {"id":"4","title":"NEBULIZATION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for OP...","date":"2021-09-04","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"1","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-02.jpg"}]},
        {"id":"5","title":"COUGH","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for PH...","date":"2021-09-05","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"1","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"}]},
        {"id":"6","title":"COLD SUSPENSION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for IR...","date":"2021-09-03","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"1","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"}]},
        {"id":"7","title":"CLAMP SUSPENSION","image":"assets/images/testimonial-icon.jpg","question_for":"Asked for GY...","date":"2021-09-02","description":"I have acne problem it is spreading on my cheeks and neck as well i ususally get hand cramps and now a days its very frequent can you advice me if isotr..","answers_count":"2","doctors":[{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"},{"profileImg":"assets/images/doctors/doctor-thumb-01.jpg"}]}
      ];
    }
    /** Sample Demo data */

    getAppAvailableLocations(){
      return  [{cityId: "1", cityName: "Hyderabad", latitude:'17.385',langitude:'78.486', status: "1"},
      {cityId: "2", cityName: "Bangolre", latitude:'12.971',langitude:'77.59', status: "1"},
      {cityId: "3", cityName: "Chennai", latitude:'13.082',langitude:'80.27', status: "1"},
      {cityId: "4", cityName: "Vizag", latitude:'17.686',langitude:'83.218', status: "1"},
      {cityId: "5", cityName: "Khammam", latitude:'17.247',langitude:'80.151', status: "1"}];
    }

}
