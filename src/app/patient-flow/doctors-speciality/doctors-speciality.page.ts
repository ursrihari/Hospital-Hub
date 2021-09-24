import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { AutocompleteSearchService } from '@app/_services/autocomplete-search.service';
import { AuthService } from '@app/_services';

@Component({
  selector: 'app-doctors-speciality',
  templateUrl: './doctors-speciality.page.html',
  styleUrls: ['./doctors-speciality.page.scss'],
})
export class DoctorsSpecialityPage implements OnInit {
  canGoBack: boolean = false;
  @ViewChild('searchbar') searchbar: AutocompleteSearchService;
  showSpecialityContent:boolean = false;
  showDiseaseContent:boolean = false;
  diseasesData=[];
  specialitiesData=[];
  //this.searchbar.getValue()
  //this.searchbar.getSelection()
  //this.searchbar.setFocus()
  constructor(private router:Router,private routerOutlet: IonRouterOutlet,
    private authService:AuthService,
    public autocompleteSearchService: AutocompleteSearchService) { }
  ngOnInit() {
    this.autocompleteSearchService.searchType="search-doctors-speciality-diseases";
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
     this.getDiseases();
     this.getSpecialities();                
    
}
  
  getDiseases(){
    let params={
      limit: "limit 0,6"
    }
    this.authService.getDiseases(params,true).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.diseasesData=data;
      this.showDiseaseContent = true;
    });
  }
  getSpecialities(){
    let params={
      limit: "limit 0,16"
    }
    this.authService.getSpecialities(params,true).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.specialitiesData=data;
      this.showSpecialityContent = true;
    });
  }
  openDoctorsPage(data){
    let navigationExtras: NavigationExtras = { state: { data: data }};
   if(data.type=='doctor'){
    this.router.navigate(['/doctor-view'],navigationExtras);
   }else if(data.type=='speciality'){
    this.router.navigate(['/patient-doctors-list'],navigationExtras);
   }
  }
  openDoctorsPageByDisease(disease){
    let obj = {"name":disease.name,"id":disease.specId,"type":"speciality"};
    let navigationExtras: NavigationExtras = { state: { data: obj }};
    this.router.navigate(['/patient-doctors-list'],navigationExtras);
  }
  openDoctorsPageBySpeciality(speciality){
    let obj = {"name":speciality.specName,"id":speciality.specId,"type":"speciality"};
    let navigationExtras: NavigationExtras = { state: { data: obj }};
    this.router.navigate(['/patient-doctors-list'],navigationExtras);
  }
}
