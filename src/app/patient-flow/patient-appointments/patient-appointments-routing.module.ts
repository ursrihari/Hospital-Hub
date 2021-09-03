import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAppointmentsPage } from './patient-appointments.page';

const routes: Routes = [
  {
    path: "",
    component: PatientAppointmentsPage,
    children: [
      {
        path: "upcoming",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../upcomming-appointments-tab/upcomming-appointments-tab.module"
              ).then((m) => m.UpcommingAppointmentsTabPageModule),
          },
        ],
      },
      {
        path: "completed",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../completed-appointments-tab/completed-appointments-tab.module"
              ).then((m) => m.CompletedAppointmentsTabPageModule),
          },
        ],
      },
      {
        path: "canceled",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../canceled-appointments-tab/canceled-appointments-tab.module"
              ).then((m) => m.CanceledAppointmentsTabPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/patient-appointments/upcoming",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAppointmentsPageRoutingModule {}
