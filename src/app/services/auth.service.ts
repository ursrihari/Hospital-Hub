import { Injectable } from '@angular/core';
import { User } from '@app/model';
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
            mobile:1111111111,
            role: 0,
            id: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            token: ''
          }
        }else if(mobile == 2222222222 && pwd == 12345){
          userObj={
            name:'',
            mobile:2222222222,
            role: 1,
            id: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            token: ''
          }
        }else if(mobile == 3333333333 && pwd == 12345){
          userObj={
            name:'',
            mobile:3333333333,
            role: 2,
            id: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            token: ''
          }
        }
        localStorage.setItem('user',JSON.stringify(userObj));
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
    localStorage.setItem('user',JSON.stringify({
      name:'',
      mobile:'',
      role: '4',
      id: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      token: ''
    }));
    this.currentUser =null;
  }
  getUser() {
    if(localStorage.getItem('user')!=''){
      let user_data = JSON.parse(localStorage.getItem('user'));
      console.log(user_data);
      this.currentUser.next(user_data);
    }else{
      this.currentUser.next('');
    }
    
    
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
