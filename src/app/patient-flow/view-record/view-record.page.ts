import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';
@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.page.html',
  styleUrls: ['./view-record.page.scss'],
})
export class ViewRecordPage implements OnInit {
canGoBack = false;
  medicalRecordsdetails: any;
  constructor(private routerOutlet: IonRouterOutlet,  private authService: AuthService) {
    this.getMedicalRecordsDetails();
  }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();

}


getMedicalRecordsDetails(){
  const params={
    // eslint-disable-next-line @typescript-eslint/naming-convention
    mrid:'3'
  };
  console.log('params:',params);
  this.authService.getMedicalRecordsDetails(params,true).subscribe((data) => {
    console.log('medicalRecordsdetails:',data);
    this.medicalRecordsdetails = data;
  });
}
}
