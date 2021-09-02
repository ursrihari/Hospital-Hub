import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable,from, of } from 'rxjs';
import { map, switchMap, delay, tap } from 'rxjs/operators';
import { User } from '@app/_model';
import { CachingService } from './caching.service';
import { ToastController } from '@ionic/angular';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    public user: Observable<User>;
    headers = new HttpHeaders();
    private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    connected = true;
  constructor(private router: Router,
    private http: HttpClient,
    private cachingService: CachingService,
    private toastController: ToastController
    ) {
        this.headers.set('Access-Control-Allow-Origin', '*');
        this.headers.set('Content-Type', 'application/json');
        //this.headers.set('Access-Control-Allow-Origin', 'http://192.168.5.114:8100');
        //this.headers.set('Access-Control-Allow-Origin', '*');
        //this.headers.set('Access-Control-Allow-Credentials', 'true');
        //this.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        //this.headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        Network.addListener('networkStatusChange', async status => {
            this.connected = status.connected;
          });
          // Can be removed once #17450 is resolved: https://github.com/ionic-team/ionic/issues/17450
    this.toastController.create({ animated: false }).then(t => { t.present(); t.dismiss(); });
    }

    postdata(params:object,url:string){ 
        return this.http.post<any>(url, params, { headers: this.headers })
        .pipe(map(data => {
            this.cachingService.cacheRequest(url, data);
            return data;
        }));
    }
    getdata(url, forceRefresh = false){
        // Handle offline case
    if (!this.connected) {
        this.toastController.create({
          message: 'You are viewing offline data.',
          duration: 2000
        }).then(toast => {
          toast.present();
        });
        return from(this.cachingService.getCachedRequest(url));
      }
      // Handle connected case
    if (forceRefresh) {
        // Make a new API call
        //return this.callAndCache(url);
        return this.http.get<any>(url, { headers: this.headers })
        .pipe(
         tap(data => {
             // Store our new data
            this.cachingService.cacheRequest(url, data);
            return data;
        }));
      } else {
        // Check if we have cached data
        const storedValue = from(this.cachingService.getCachedRequest(url));
        return storedValue.pipe(
          switchMap(result => {
            if (!result) {
              // Perform a new request since we have no data
              //return this.callAndCache(url);
              return this.http.get<any>(url, { headers: this.headers })
                .pipe(
                tap(data => {
                    // Store our new data
                    this.cachingService.cacheRequest(url, data);
                    return data;
                }));

            } else {
              // Return cached data
              return of(result);
            }
          })
        );
      }

        // return this.http.get<any>(url, { headers: this.headers })
        // .pipe(
        //  delay(2000), // Only for testing!
        //  tap(data => {
        //     this.cachingService.cacheRequest(url, data);
        //     return data;
        // }));
    }

    // Standard API Functions
 
//   getUsers(forceRefresh: boolean) {
//     const url = 'https://roadcreations.com/hospitalhub-kuwait/api/countries.json';
//     return this.getData(url, forceRefresh).pipe(
//       map(res => res['results'])
//     );
//   }
 
//   getChuckJoke(forceRefresh: boolean) {
//     const url = 'https://roadcreations.com/hospitalhub-kuwait/api/countries.json';
//     return this.getData(url, forceRefresh);
//   }
 
  // Caching Functions
 
//   private getData(url, forceRefresh = false): Observable<any> {
//     // console.log();
//     // // Handle offline case
//     // if (!this.connected) {
//     //   this.toastController.create({
//     //     message: 'You are viewing offline data.',
//     //     duration: 2000
//     //   }).then(toast => {
//     //     toast.present();
//     //   });
//     //   return from(this.cachingService.getCachedRequest(url));
//     // }
 
//     // // Handle connected case
//     // if (forceRefresh) {
//     //   // Make a new API call
//     //   return this.callAndCache(url);
//     // } else {
//     //   // Check if we have cached data
//     //   const storedValue = from(this.cachingService.getCachedRequest(url));
//     //   return storedValue.pipe(
//     //     switchMap(result => {
//     //       if (!result) {
//     //         // Perform a new request since we have no data
//     //         return this.callAndCache(url);
//     //       } else {
//     //         // Return cached data
//     //         return of(result);
//     //       }
//     //     })
//     //   );
//     // }
//   }

    private callAndCache(url): Observable<any> {
        return this.http.get<any>(url, { headers: this.headers })
        .pipe(
         tap(data => {
             // Store our new data
            this.cachingService.cacheRequest(url, data);
            return data;
        }));
      }
    
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
        role: '999',
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
        user['role']='4';
        }else if(mobile=='2222222222'){
        user['mobile']='2222222222';
        user['role']='3';
        }else if(mobile=='3333333333'){
        user['mobile']='333333333';
        user['role']='5';
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