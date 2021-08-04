import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientProfilePage } from './patient-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientProfilePage,
    children: [
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-personal-tab/profile-personal-tab.module').then( m => m.ProfilePersonalTabPageModule)
          }
        ]
      },
      {
        path: 'medical',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-medical-tab/profile-medical-tab.module').then( m => m.ProfileMedicalTabPageModule)
          }
        ]
      },
      {
        path: 'lifestyle',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-lifestyle-tab/profile-lifestyle-tab.module').then( m => m.ProfileLifestyleTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/patient-profile/personal',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientProfilePageRoutingModule {}
