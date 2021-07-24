import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.page.html',
  styleUrls: ['./patient-doctors-list.page.scss'],
})
export class PatientDoctorsListPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    public popoverController: PopoverController,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
openDoctorViewPage(){
  this.router.navigateByUrl('/doctor-view');
}
async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverComponent,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}
