import { Component, OnInit } from '@angular/core';
import { AlertController, IonRouterOutlet, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.page.html',
  styleUrls: ['./patient-doctors-list.page.scss'],
})
export class PatientDoctorsListPage implements OnInit {
  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    public alertController: AlertController,
    private popoverController: PopoverController,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
openDoctorViewPage(){
  this.router.navigateByUrl('/doctor-view');
}
openSelectDoctorTimeSlotPage(){
  this.router.navigateByUrl('/select-doctor-time-slot');
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


async presentAlertCheckbox() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Choose Filter',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Now or Later',
        value: 'value1',
        handler: () => {
          console.log('Checkbox 1 selected');
        },
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Video Consult',
        value: 'value2',
        handler: () => {
          console.log('Checkbox 2 selected');
        }
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'PLUS',
        value: 'value3',
        handler: () => {
          console.log('Checkbox 3 selected');
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}
}

