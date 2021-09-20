import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {AutoCompleteService} from 'ionic4-auto-complete';
import { AuthService } from '.';
@Injectable({
  providedIn: 'root'
})
export class AutocompleteSearchService implements AutoCompleteService{
  labelAttribute = 'name';
  private countries:any[] = [];
  constructor(private http:HttpClient, private authService:AuthService) {
  }

  getResults(keyword:string) {
    let params={
      searchText: keyword
    }
    let observable:Observable<any>;
    observable = this.authService.getDoctorsSpecilities(params,true);
    return observable.pipe(
      map(
        (result) => {
          console.log(result);
          return result.filter(
            (item) => {
              return item.name.toLowerCase()
            }
          );
        }
      )
    );
  }
}
