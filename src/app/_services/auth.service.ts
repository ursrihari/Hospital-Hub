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
  getSpecialities(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-specialities.php`,forceRefresh);
  }
  getAppCities(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/get-cities.php`,forceRefresh);
  }
  getHospital(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-hospital.php`,forceRefresh);
  }
  getHospitalReviews(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-hospital-reviews.php`,forceRefresh);
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
  getAppInformation(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/app/get-app-info.php`,forceRefresh);
  }
  getSpecialists(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-departments.php`,forceRefresh);
  }
  getLocationWiseDoctors(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-doctors-location-wise.php`,forceRefresh);
  }
  getLocationWiseHospitals(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-hospitals-location-wise.php`,forceRefresh);
  }
  getDoctorsSpecilities(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/search-doctors-specialities.php`,forceRefresh);
  }

  getDoctorDetails(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-doctor-details.php`,forceRefresh);
  }
  getDoctorReviews(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-doctor-reviews.php`,forceRefresh);
  }
  getAppPractices(forceRefresh:boolean){
    return this.accountService.getdata(`${environment.apiUrl}/app/get-app-promises.php`,forceRefresh);
  }
  getDoctorsBySpeciality(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/doctors/get-doctors-by-speciality.php`,forceRefresh);
  }
  getDiseases(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params, `${environment.apiUrl}/doctors/get-diseases.php`,forceRefresh);
  }
  getHospitalsSpecilities(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/search-hospitals-specialities-diseases.php`,forceRefresh);
  }
  getHospitalsBySpeciality(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-hospitals-by-speciality.php`,forceRefresh);
  }
  getSpecialitiesInHospital(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-specialities-in-hospital.php`,forceRefresh);
  }
  getDoctorsInHospital(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/hospitals/get-doctors-in-hospital.php`,forceRefresh);
  }
  getMedicalRecordsDetails(params: object, forceRefresh: boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/medical-records/get-medical-record-details.php`,forceRefresh);
  }

  /*Pending*/





  getMedicalRecords(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/medical-records/get-medical-records.php`,forceRefresh);
  }
  shareMedicalRecord(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  deleteMEdicalRecord(params:object,forceRefresh:boolean){
    return this.accountService.postdata(params,`${environment.apiUrl}/`,forceRefresh);
  }
  getPatients(params:object,forceRefresh:boolean){
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
