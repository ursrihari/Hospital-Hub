import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./signup/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'patient-appointment-booking',
  //   loadChildren: () => import('./patient-flow/patient-appointment-booking/patient-appointment-booking.module').then( m => m.PatientAppointmentBookingPageModule)
  // },
  {
    path: 'patient-appointments',
    loadChildren: () => import('./patient-flow/patient-appointments/patient-appointments.module').then( m => m.PatientAppointmentsPageModule)
  },
  {
    path: 'patient-appointment-details',
    loadChildren: () => import('./patient-flow/patient-appointment-details/patient-appointment-details.module').then( m => m.PatientAppointmentDetailsPageModule)
  },
  {
    path: 'patient-profile',
    loadChildren: () => import('./patient-flow/patient-profile/patient-profile.module').then( m => m.PatientProfilePageModule)
  },
  {
    path: 'receptionist-appointments',
    loadChildren: () => import('./receptionist-flow/receptionist-appointments/receptionist-appointments.module').then( m => m.ReceptionistAppointmentsPageModule)
  },
  {
    path: 'receptionist-appointment-details',
    loadChildren: () => import('./receptionist-flow/receptionist-appointment-details/receptionist-appointment-details.module').then( m => m.ReceptionistAppointmentDetailsPageModule)
  },
  {
    path: 'receptionist-profile',
    loadChildren: () => import('./receptionist-flow/receptionist-profile/receptionist-profile.module').then( m => m.ReceptionistProfilePageModule)
  },
  {
    path: 'doctor-appointments',
    loadChildren: () => import('./doctor-flow/doctor-appointments/doctor-appointments.module').then( m => m.DoctorAppointmentsPageModule)
  },
  {
    path: 'doctor-appointment-details',
    loadChildren: () => import('./doctor-flow/doctor-appointment-details/doctor-appointment-details.module').then( m => m.DoctorAppointmentDetailsPageModule)
  },
  {
    path: 'doctor-profile',
    loadChildren: () => import('./doctor-flow/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./signup/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./patient-flow/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'patient-home',
    loadChildren: () => import('./patient-flow/patient-home/patient-home.module').then( m => m.PatientHomePageModule)
  },
  {
    path: 'patient-doctors-list',
    loadChildren: () => import('./patient-flow/patient-doctors-list/patient-doctors-list.module').then( m => m.PatientDoctorsListPageModule)
  },
  {
    path: 'country-code-modal',
    loadChildren: () => import('./signup/country-code-modal/country-code-modal.module').then( m => m.CountryCodeModalPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./patient-flow/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'patient-hospitals-list',
    loadChildren: () => import('./patient-flow/patient-hospitals-list/patient-hospitals-list.module').then( m => m.PatientHospitalsListPageModule)
  },
  {
    path: 'patient-favourites',
    loadChildren: () => import('./patient-flow/patient-favourites/patient-favourites.module').then( m => m.PatientFavouritesPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./patient-flow/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'doctor-view',
    loadChildren: () => import('./patient-flow/doctor-view/doctor-view.module').then( m => m.DoctorViewPageModule)
  },
  {
    path: 'doctor-booking',
    loadChildren: () => import('./patient-flow/doctor-booking/doctor-booking.module').then( m => m.DoctorBookingPageModule)
  },
  {
    path: 'doctor-consult',
    loadChildren: () => import('./patient-flow/doctor-consult/doctor-consult.module').then( m => m.DoctorConsultPageModule)
  },
  {
    path: 'test-bookings',
    loadChildren: () => import('./patient-flow/test-bookings/test-bookings.module').then( m => m.TestBookingsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./patient-flow/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'consultations',
    loadChildren: () => import('./patient-flow/consultations/consultations.module').then( m => m.ConsultationsPageModule)
  },
  {
    path: 'medical-records',
    loadChildren: () => import('./patient-flow/medical-records/medical-records.module').then( m => m.MedicalRecordsPageModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./patient-flow/reminders/reminders.module').then( m => m.RemindersPageModule)
  },
  {
    path: 'payments-health-cash',
    loadChildren: () => import('./patient-flow/payments-health-cash/payments-health-cash.module').then( m => m.PaymentsHealthCashPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./patient-flow/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'explore-plus',
    loadChildren: () => import('./patient-flow/explore-plus/explore-plus.module').then( m => m.ExplorePlusPageModule)
  },
  {
    path: 'doctors-speciality',
    loadChildren: () => import('./patient-flow/doctors-speciality/doctors-speciality.module').then( m => m.DoctorsSpecialityPageModule)
  },
  {
    path: 'select-doctor-time-slot',
    loadChildren: () => import('./patient-flow/select-doctor-time-slot/select-doctor-time-slot.module').then( m => m.SelectDoctorTimeSlotPageModule)
  },
  {
    path: 'appointment-booking-conformation',
    loadChildren: () => import('./patient-flow/appointment-booking-conformation/appointment-booking-conformation.module').then( m => m.AppointmentBookingConformationPageModule)
  },
  {
    path: 'hospital-specialities',
    loadChildren: () => import('./patient-flow/hospital-specialities/hospital-specialities.module').then( m => m.HospitalSpecialitiesPageModule)
  },
  {
    path: 'enter-delivery-pincode',
    loadChildren: () => import('./patient-flow/enter-delivery-pincode/enter-delivery-pincode.module').then( m => m.EnterDeliveryPincodePageModule)
  },
  {
    path: 'my-doctors',
    loadChildren: () => import('./patient-flow/my-doctors/my-doctors.module').then( m => m.MyDoctorsPageModule)
  },
  {
    path: 'doctor-profile',
    loadChildren: () => import('./doctor-flow/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'upload-record',
    loadChildren: () => import('./patient-flow/upload-record/upload-record.module').then( m => m.UploadRecordPageModule)
  },
  {
    path: 'health-checkup',
    loadChildren: () => import('./patient-flow/health-checkup/health-checkup.module').then( m => m.HealthCheckupPageModule)
  },
  {
    path: 'read-about-health',
    loadChildren: () => import('./patient-flow/read-about-health/read-about-health.module').then( m => m.ReadAboutHealthPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./patient-flow/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'appointment-help',
    loadChildren: () => import('./patient-flow/appointment-help/appointment-help.module').then( m => m.AppointmentHelpPageModule)
  },
  {
    path: 'appointment-cancel',
    loadChildren: () => import('./patient-flow/appointment-cancel/appointment-cancel.module').then( m => m.AppointmentCancelPageModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./patient-flow/hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  {
    path: 'doctor-home',
    loadChildren: () => import('./doctor-flow/doctor-home/doctor-home.module').then( m => m.DoctorHomePageModule)
  },
  {
    path: 'my-patients',
    loadChildren: () => import('./doctor-flow/my-patients/my-patients.module').then( m => m.MyPatientsPageModule)
  },
  {
    path: 'schedule-timings',
    loadChildren: () => import('./doctor-flow/schedule-timings/schedule-timings.module').then( m => m.ScheduleTimingsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./doctor-flow/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./doctor-flow/social-media/social-media.module').then( m => m.SocialMediaPageModule)
  },  {
    path: 'receptionist-home',
    loadChildren: () => import('./receptioist-flow/receptionist-home/receptionist-home.module').then( m => m.ReceptionistHomePageModule)
  },
  {
    path: 'share-record',
    loadChildren: () => import('./patient-flow/share-record/share-record.module').then( m => m.ShareRecordPageModule)
  },
  {
    path: 'view-record',
    loadChildren: () => import('./patient-flow/view-record/view-record.module').then( m => m.ViewRecordPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
