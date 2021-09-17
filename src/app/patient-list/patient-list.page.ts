import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router,
    private authService:AuthService) { }
    patientsData = [];
    showContent:boolean= false; 
    ngOnInit() {
      this.canGoBack = this.routerOutlet &&
                       this.routerOutlet.canGoBack();
    this.getPatientsData();                     
  }
  openPatientDetailsPage(){
    this.router.navigateByUrl('/patient-details');
  }
  
  getPatientsData() {
    let params={
      receptionistId:''
    }
    this.authService.getPatients(params,true).subscribe((data) => {
        console.log(data);
        this.patientsData = data;
        this.showContent = true;      
    });
  }
}
