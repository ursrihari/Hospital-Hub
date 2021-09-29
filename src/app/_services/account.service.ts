import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, from, of, throwError } from "rxjs";
import { catchError, map, switchMap, delay, tap } from "rxjs/operators";
import { User } from "@app/_model";
import { CachingService } from "./caching.service";
import { ToastController } from "@ionic/angular";
import { Network } from "@capacitor/network";
import { element } from "protractor";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  public user: Observable<User>;
  headers = new HttpHeaders();
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  connected = true;
  constructor(
    private router: Router,
    private http: HttpClient,
    private cachingService: CachingService,
    private toastController: ToastController
  ) {
    this.headers.set("Access-Control-Allow-Origin", "*");
    this.headers.set("Content-Type", "application/json");
    //this.headers.set('Access-Control-Allow-Origin', 'http://192.168.5.114:8100');
    //this.headers.set('Access-Control-Allow-Origin', '*');
    //this.headers.set('Access-Control-Allow-Credentials', 'true');
    //this.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    //this.headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    Network.addListener("networkStatusChange", async (status) => {
      this.connected = status.connected;
    });
    // Can be removed once #17450 is resolved: https://github.com/ionic-team/ionic/issues/17450
    this.toastController.create({ animated: false }).then((t) => {
      t.present();
      t.dismiss();
    });
    
  }

  postdata(params: object, url: string, forceRefresh) {
    return this.prepareData(url, forceRefresh, "POST", params);
  }

  getdata(url, forceRefresh = false) {
    return this.prepareData(url, forceRefresh, "GET", "");
  }

  prepareData(url, forceRefresh, request_type, params) {
    if (!this.connected) {
      this.toastController
        .create({
          message: "You are viewing offline data.",
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
      return from(this.cachingService.getCachedRequest(url));
    }
    if (forceRefresh) {
      if (request_type == "POST") {
        return this.callAndCachePOST(url, forceRefresh, request_type, params);
      } else if (request_type == "GET") {
        return this.callAndCacheGET(url);
      }
    } else {
      // Check if we have cached data
      const storedValue = from(this.cachingService.getCachedRequest(url));
      return storedValue.pipe(
        switchMap((result) => {
          if (!result) {
            // Perform a new request since we have no data
            if (request_type == "POST") {
              return this.callAndCachePOST(
                url,
                forceRefresh,
                request_type,
                params
              );
            } else if (request_type == "GET") {
              return this.callAndCacheGET(url);
            }
          } else {
            // Return cached data
            return of(result);
          }
        })
      );
    }
  }

  private callAndCacheGET(url): Observable<any> {
    return this.http
      .get<any>(url, { headers: this.headers })
      .pipe(
        tap((data) => {
          // Store our new data
          this.cachingService.cacheRequest(url, data);
          return data;
        }),
        catchError(this.handleError(url, []))
      );
  }
  private callAndCachePOST(
    url,
    forceRefresh,
    request_type,
    params
  ): Observable<any> {
    return this.http
      .post<any>(url, params, { headers: this.headers })
      .pipe(
        map((data) => {
          this.cachingService.cacheRequest(url, data);
          if(data.hasOwnProperty('error') && data.error.hasOwnProperty('code')){
             if(data.error.code == "404"){
                  data = [];
              }
          }
          return data;
        }),
        catchError(this.handleError(url, []))
      );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  verifyOtp(params: object, url: string) {
    return this.http
      .post<any>(url, params, { headers: this.headers })
      .pipe(
        map((user) => {
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        }),
        catchError((err) => {
          console.log("error caught in service");
          console.error(err);

          //Handle the error here

          return throwError(err); //Rethrow it back to component
        })
      );
  }
  isLoggedIn() {
    return this.userSubject != null;
  }
  logout() {
    localStorage.setItem(
      "user",JSON.stringify({
      name:'',
    mobile:'',
    role: '',
    role_name: '',
    role_id:'',
    id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    token: '',
    contactNo: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    height: '',
    weight: '',
    emergencyContact: '',
    location: '',
    allergies: '',
    currentMedications: '',
    pastMedications: '',
    chronicDiseases: '',
    injuries: '',
    surgeies:'',
    smokingHabits: '',
    alcoholConumption: '',
    activityLevel: '',
    foodPreference: '',
    occupation: '',
      }));
  }
  // // JSON.stringify({
  //   name: "",
  //   mobile: "",
  //   role: "999",
  //   id: "",
  //   username: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   token: "",
  //})
  listenUser(){
    if (localStorage.getItem("user") != "") {
      let user_data = JSON.parse(localStorage.getItem("user"));
      //console.log(user_data);
      this.userSubject.next(user_data);
    }else {
       this.userSubject.next("");
    }
    return this.userSubject.asObservable();
}
  getUser() {
    if (localStorage.getItem("user") != "") {
      let user_data = JSON.parse(localStorage.getItem("user"));
      //console.log(user_data);
      //this.userSubject.next(user_data);
      return user_data; 
    } 
      //else {
    //   //this.userSubject.next("");
    // }
    //return this.userSubject.asObservable();
  }
  setUser(mobile,userData) {
    let user = {};
    Object.keys(userData).forEach(key => {
      console.log(key, userData[key]);
      user[key] = userData[key];
    });
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem("user", JSON.stringify(user));
    this.userSubject.next(user);
  }
 
  isPatient() {
    //return this.currentUser.role == 4;
    //return
  }
  isDoctor() {
    //return this.currentUser.role == 3;
  }
  isReceptionist() {
    // return this.currentUser.role == 5;
  }
  public isApp(): boolean {
    return (
      document.URL.indexOf("http://localhost") === 0 ||
      document.URL.indexOf("ionic") === 0 ||
      document.URL.indexOf("https://localhost") === 0
    );
  }

  public isBrowser(): boolean {
    return !this.isApp();
  }
  public get userValue(): User {
    return this.userSubject.value;
  }
  profileCompleteness(user){
    let length = Object.keys(user).length;
      let count_total=0;
      Object.keys(user).forEach(k => {
        if(user[k]){
          count_total = count_total+1;
        }
     });
     return Math.round(((count_total)/length)*100);
  }
}
