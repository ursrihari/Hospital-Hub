import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDoctorTimeSlotPage } from './select-doctor-time-slot.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDoctorTimeSlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDoctorTimeSlotPageRoutingModule {}
