import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalValuesService } from '@app/_services';
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
  
  constructor(private router:Router,
    public modalController: ModalController,
    private globalValues:GlobalValuesService) { }

  ngOnInit() {
    this.globalValues.getLocation().subscribe(data=>{
      console.log(data);
      if(data){
        this.location = data;
      }
      
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
  



    /** Sample Demo data */

    getAppAvailableLocations(){
      
  return  [{cityId: "1", cityName: "Hyderabad", latitude:'17.385',langitude:'78.486', status: "1"},
  {cityId: "2", cityName: "Bangolre", latitude:'12.971',langitude:'77.59', status: "1"},
  {cityId: "3", cityName: "Chennai", latitude:'13.082',langitude:'80.27', status: "1"},
  {cityId: "4", cityName: "Vizag", latitude:'17.686',langitude:'83.218', status: "1"},
  {cityId: "5", cityName: "Khammam", latitude:'17.247',langitude:'80.151', status: "1"}]
    }

}
