import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //currentUser:User;
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  login(mobile:number,pwd:number){
    let userObj: User;
        if(mobile == 1111111111 && pwd == 12345){
          userObj={
            name:'',
            mobile: 1111111111,
            role: 0
          }
        }else if(mobile == 2222222222 && pwd == 12345){
          userObj={
            name: '',
            mobile: 2222222222,
            role: 1
          }
        }else if(mobile == 3333333333 && pwd == 12345){
          userObj={
            name: '',
            mobile: mobile,
            role: 2
          }
        }
      return of(userObj).pipe(
        tap(user => {
          this.currentUser.next(user);
        })
      );
  }

  isLoggedIn(){
    return this.currentUser !=null;
  }

  logout(){
    this.currentUser =null;
  }
  getUser() {
    return this.currentUser.asObservable();
  }
  isPatient(){
    
    //return this.currentUser.role == 0;
    //return 
  }
  isDoctor(){
    //return this.currentUser.role == 1;
  }
  isReceptionist(){
   // return this.currentUser.role == 2;
  }
}
