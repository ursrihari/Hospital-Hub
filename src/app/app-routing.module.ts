import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'patient-appointment-booking',
    loadChildren: () => import('./patient-flow/patient-appointment-booking/patient-appointment-booking.module').then( m => m.PatientAppointmentBookingPageModule)
  },
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
    loadChildren: () => import('./otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
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
    loadChildren: () => import('./modal-pages/country-code-modal/country-code-modal.module').then( m => m.CountryCodeModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
