import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/_model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    public user: Observable<User>;
    headers = new HttpHeaders();
    private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router,
    private http: HttpClient) {
        this.headers.set('Access-Control-Allow-Origin', '*');
        this.headers.set('Content-Type', 'application/json');
        //this.headers.set('Access-Control-Allow-Origin', 'http://192.168.5.114:8100');
        //this.headers.set('Access-Control-Allow-Origin', '*');
        //this.headers.set('Access-Control-Allow-Credentials', 'true');
        //this.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        //this.headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    }

    postdata(params:object,url:string){ return this.http.post<any>(url, params, { headers: this.headers }).pipe(map(data => {return data}))}
    getdata(url:string){return this.http.post<any>(url, { headers: this.headers }).pipe(map(data => {return data}))}
    
    
    verifyOtp(params:object,url:string){
        return this.http.post<any>(url, params, { headers: this.headers })
            .pipe(map(user => {
                console.log(user);  
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));    
    }
    isLoggedIn(){ return this.userSubject !=null; }
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
    setUser(mobile){
        let user = {};
        user['name']='';
        user['id']='';
        user['username']='';
        user['password']='';
        user['firstName']='';
        user['lastName']='';
        user['token']='';
        if(mobile=='1111111111'){
        user['mobile']='1111111111';
        user['role']='0';
        }else if(mobile=='2222222222'){
        user['mobile']='2222222222';
        user['role']='1';
        }else if(mobile=='3333333333'){
        user['mobile']='333333333';
        user['role']='2';
        }
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
    public isApp(): boolean {
        return (
        document.URL.indexOf('http://localhost') === 0 || 
        document.URL.indexOf('ionic') === 0 || 
        document.URL.indexOf('https://localhost') === 0
        );
    }
    
    public isBrowser(): boolean {
        return !this.isApp();
    }
    public get userValue(): User {
        return this.userSubject.value;
    }
}