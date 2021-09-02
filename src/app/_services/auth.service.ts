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
    return this.accountService.getdata(`${environment.apiUrl}/countries.json`,forceRefresh);
  }
  login(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/user/otp-login.php`);
  }
  verifyOtp(params:object){
    return this.accountService.verifyOtp(params,`${environment.apiUrl}/user/verify-otp.php`); 
  }
  getPatientDetails(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/patients/get-patient-details.php`);
  }
  getHospitals(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/patients/get-near-hospitals.php`);
  }
  getAppointments(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/get-appointments.php`);
  }
  updateAppointments(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/update-appointment.php`);
  }
  addAppointments(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/add-appointment.php`);
  }
  getAppointmentDetails(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/appointments/get-appointment-details.php`);
  }
  getDepartments(params:object){
    return this.accountService.postdata(params,`${environment.apiUrl}/user/get-departments.php`);
  }

  

 
  




}
