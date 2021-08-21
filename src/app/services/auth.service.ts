import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { tap } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //currentUser:User;
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }
  login(mobile:number){
    console.log(mobile);
    const headers = new HttpHeaders();
    //headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Access-Control-Allow-Origin', '*');
   // headers.set('Access-Control-Allow-Headers', 'X-Requested-With');
    let params={
      phoneno: mobile
    }
      return this.http.post<User>(`${environment.apiUrl}/send-sms/phpsendsms.php?phoneno=${mobile}`, { headers: headers })
          .pipe(map(user => {
              // user['role'] = 0;
              // user['mobile'] = mobile;
              // // store user details and jwt token in local storage to keep user logged in between page refreshes
              // localStorage.setItem('user', JSON.stringify(user));
              // this.userSubject.next(user);
              return user;
          }));    
  }
  verifyOtp(mobile:number,otp:number){
    return this.http.post<User>(`${environment.apiUrl}`, { mobile,otp })
          .pipe(map(user => {
              user['role'] = 0;
              user['mobile'] = mobile;
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));    
  }

  isLoggedIn(){
    return this.userSubject !=null;
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
    //this.currentUser =null;
  }
  getUser() {
    if(localStorage.getItem('user')!=''){
      let user_data = JSON.parse(localStorage.getItem('user'));
      //console.log(user_data);
      this.userSubject.next(user_data);
    }else{
      this.userSubject.next('');
    }
    return this.userSubject.asObservable();
  }
  setUser(){
   let user = {};
   user['name']='';
   user['mobile']='1111111111';
   user['role']='0';
   user['id']='';
   user['username']='';
   user['password']='';
   user['firstName']='';
   user['lastName']='';
   user['token']='';
   
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
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
