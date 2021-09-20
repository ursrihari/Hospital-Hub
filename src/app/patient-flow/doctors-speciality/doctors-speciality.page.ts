import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { AutocompleteSearchService } from '@app/_services/autocomplete-search.service';

@Component({
  selector: 'app-doctors-speciality',
  templateUrl: './doctors-speciality.page.html',
  styleUrls: ['./doctors-speciality.page.scss'],
})
export class DoctorsSpecialityPage implements OnInit {
  canGoBack: boolean = false;
  @ViewChild('searchbar') searchbar: AutocompleteSearchService;
  //this.searchbar.getValue()
  //this.searchbar.getSelection()
  //this.searchbar.setFocus()
  constructor(private router:Router,private routerOutlet: IonRouterOutlet,
    public autocompleteSearchService: AutocompleteSearchService) { }
  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
    
}
  
  openDoctorsPage(data){
    let navigationExtras: NavigationExtras = { state: { data: data }};
   if(data.type=='doctor'){
    this.router.navigate(['/doctor-view'],navigationExtras);
   }else if(data.type=='speciality'){
    this.router.navigate(['/patient-doctors-list'],navigationExtras);
   }

    // this.router.navigateByUrl('/patient-doctors-list');
  }
  


}
