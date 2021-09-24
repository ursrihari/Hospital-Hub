import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '@app/_services';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {
  canGoBack: boolean = false;
  diseases=[];
  diseasesOriginal=[];
  showContent:boolean=false;
  selectedHospital={};
  searchText="";
  constructor(private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
                     this.route.queryParams.subscribe((params) => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedHospital = this.router.getCurrentNavigation().extras.state.data;
      console.log(JSON.stringify(this.selectedHospital));
      this.getDiseasesInHospital(this.selectedHospital["id"]);
    }else{
      this.getAllDiseases();
    }
  });
  }
  openDoctorsListPage(disease){
    let obj = {"name":disease.name,"id":disease.specId,"type":"speciality"};
    let navigationExtras: NavigationExtras = { state: { data: obj }};
    this.router.navigate(['/patient-doctors-list'],navigationExtras);
  }
  
  getDiseasesInHospital(hospitalId){
    let params={
      hid:hospitalId
    }
    this.authService.getSpecialitiesInHospital(params,true).subscribe((data) => {
        console.log(data);
        this.diseasesOriginal = data;
        this.diseases = data;
        this.showContent = true;      
    });
  }
  getAllDiseases(){
    let params={
      limit:""
    }
    this.authService.getDiseases(params,true).subscribe((data) => {
        console.log(data);
        this.diseasesOriginal = data;
        this.diseases = data;
        this.showContent = true;      
    });
  }
  
  onPercentChange(text){
    this.diseases =  this.diseasesOriginal.filter(
      (item) => {
        return item.name.toLowerCase().includes(text.toLowerCase())
      }
    );
  }
}
