import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocationPage } from "../../location/location.page";

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
  
  
  constructor(private router:Router,
    public modalController: ModalController) { }

  ngOnInit() {
  }
  openAppointment(){
    this.router.navigateByUrl('/patient-appointment-details');
  }
  openDoctorsPage(){
    this.router.navigateByUrl('/patient-doctors-list');
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
    this.router.navigateByUrl('/patient-hospitals-list');
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
        // let selectedCountry = data.data.value;
        // if(selectedCountry && selectedCountry.hasOwnProperty('country_code') && selectedCountry.country_code!=''){
        //   console.log(selectedCountry);
        //   this.country.country_code = '+'+selectedCountry.country_code;
        //   this.country.iso_code = selectedCountry.iso_code;
        // }
        
      })
      
      return await modal.present();
    }
  

}
