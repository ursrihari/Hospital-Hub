import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {
  //public location: Observable<any>;
  private location: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { 
    this.setLocation({ latitude: '', longitude: '', cityId:'', cityName:''});
  }

  setLocation(location:object){
    this.location.next(location);
  }
  getLocation(){
    return this.location;
  }
}
