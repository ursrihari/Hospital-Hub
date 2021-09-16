import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private accountService:AccountService) {}
  //`${environment.apiUrl}/send-sms/phpsendsms.php?phoneno=${mobile}
  //this.http.post<User>(`${environment.apiUrl}/user/otp-login.php`, params, { headers: headers }
  
  getCountries(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/get-countries.php`,forceRefresh);
  }
  login(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/user/otp-login.php`,forceRefresh);
  }
  verifyOtp(params:object){
    return this.accountService.verifyOtp(params,`${environment.apiUrl}/user/verify-otp.php`); 
  }
  getPatientDetails(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/patients/get-patient-details.php`,forceRefresh);
  }
  getHospitals(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/patients/get-near-hospitals.php`,forceRefresh);
  }
  getAppointments(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/get-appointments.php`,forceRefresh);
  }
  updateAppointments(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/update-appointment.php`,forceRefresh);
  }
  addAppointment(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/add-appointment.php`,forceRefresh);
  }
  getAppointmentDetails(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/get-appointment-details.php`,forceRefresh);
  }
  getDepartments(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/user/get-departments.php`,forceRefresh);
  }
  getSpecialities(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/get-specialities.php`,forceRefresh);
  }
  getAppCities(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/get-cities.php`,forceRefresh);
  }
  getHospital(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/get-hospital.php`,forceRefresh);
  }
  addProfileData(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/patients/add-patient.php`,forceRefresh);
  }
  getHomePageData(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/home/get-home-banners.php`,forceRefresh);
  }
  getCovidSymptoms(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/covid-assist/get-covid-symptoms.php`,forceRefresh);
  }
  getDiseaseSymptoms(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/diseases/get-disease-symptoms.php`,forceRefresh);
  }
  /*Pending*/
  
  
  getHospitalReviews(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  getDoctorDetails(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  getDoctorReviews(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  getMedicalRecords(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  shareMedicalRecord(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  deleteMEdicalRecord(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }

  /*Peter*/
  getMyDoctors(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }

  getDoctorTimeSlots(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }

  getPractoPractices(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/`,forceRefresh);
  }
  
  getNearDoctors(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }

  getNearHospitals(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }

  getQuestions(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/`,forceRefresh);
  }
 
  

  getSymptoms(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/`,forceRefresh);
  }

  getOffers(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/`,forceRefresh);
  }
  




}
