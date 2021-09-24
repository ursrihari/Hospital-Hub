import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AutoCompleteService} from 'ionic4-auto-complete';
import { AuthService } from '.';
@Injectable({
  providedIn: 'root'
})
export class AutocompleteSearchService implements AutoCompleteService{
  labelAttribute = 'name';
  searchType:string;
  paramsObj:object={};
  public returnData: BehaviorSubject<any> = new BehaviorSubject(null);
  public showLoader: BehaviorSubject<any> = new BehaviorSubject(null);
  private countries:any[] = [];
  constructor(private http:HttpClient, private authService:AuthService) {
  }
  
  getResults(keyword:string) {
    this.showLoaderForSearchbar(true);
    console.log(JSON.stringify(this.paramsObj));
    let params={
      searchText: keyword
    }
    params = {...params,...this.paramsObj};
    let observable:Observable<any>;
    if(this.searchType=="search-doctors-speciality-diseases"){
      observable = this.authService.getDoctorsSpecilities(params,true);
    }else if(this.searchType=="search-hospital-speciality-diseases"){
      observable = this.authService.getHospitalsSpecilities(params,true);
    }else if(this.searchType == "search-hospital-by-speciality"){
      observable = this.authService.getHospitalsBySpeciality (params,true);
    }else if(this.searchType == "search-hospitals-location-wise"){
      observable = this.authService.getLocationWiseHospitals (params,true);
    }else if(this.searchType == "search-doctors-in-hospital"){
      observable = this.authService.getDoctorsInHospital (params,true);
    }else if(this.searchType == "search-doctors-location-wise"){
      observable = this.authService.getLocationWiseDoctors (params,true);
    }else if(this.searchType == "search-doctors-by-speciality"){
      observable = this.authService.getDoctorsBySpeciality (params,true);
    }
    
   
    return observable.pipe(
      map(
        (result) => {
          this.searchedData(result);
          this.showLoaderForSearchbar(false);
          return result.filter(
            (item) => {
              return item.name.toLowerCase()
            }
          );
        }
      )
    );
        
  }
  searchedData(data){
    this.returnData.next(data);
    return this.returnData.asObservable();
}
  showLoaderForSearchbar(flag){
    this.showLoader.next(flag);
    return this.showLoader.asObservable();
}
}
