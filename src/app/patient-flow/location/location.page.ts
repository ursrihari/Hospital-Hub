import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/_services';
import { ModalController } from '@ionic/angular';
import { GlobalValuesService } from '@app/_services';
import { ToastController } from "@ionic/angular";
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  cities=[];
  cityid='';
  selectedRadioGroup:any;
  selectedRadioItem:any;
  showContent:boolean = false;
  constructor(private modalController:ModalController,
    private authService:AuthService,
    private globalValues:GlobalValuesService,
    private toastController: ToastController,
    private nativeGeocoder: NativeGeocoder
    ) { }

  ngOnInit() {
    this.getCities();
    //this.cities = this.getAppAvailableLocations();
    //this.getCities();
  }
  closeModal(){
      this.modalController.dismiss({
        'dismissed': true
     });
    }
    

getCities(){
  this.authService.getAppCities(false).subscribe((data) => {
    console.log(data);
    this.cities = data;
    this.showContent = true;
  });
}



getCurrentLocation(){
  /*
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-feature android:name="android.hardware.location.gps" />
  */ 
  // Geolocation.checkPermissions().then(data=>{
  //     console.log(JSON.stringify(data));
  //     if(data.location !='granted'){
  //       Geolocation.requestPermissions().then(data=>{
  //         console.log(JSON.stringify(data));

  //       });
  //     }
  // });
  Geolocation.getCurrentPosition().then(data=>{
    console.log(JSON.stringify(data));
      let location={
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      cityId:'',
      cityName:''
    }
    this.globalValues.setLocation(location);
    this.closeModal();
    this.getLocatioByLatLang(data.coords.latitude,data.coords.longitude);
    //this.getLocatioByLatLang(17.436036909330504, 78.4445435853155);
    // this.globalValues.getLocation().subscribe(location=>{
    //   console.log(JSON.stringify(location));
    // });
  });
}

getLocatioByLatLang(lat,lang){
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

this.nativeGeocoder.reverseGeocode(lat, lang, options)
  .then((result: NativeGeocoderResult[]) => {
    console.log(JSON.stringify(result));
    let locality;
    
    if(result.length>0){
      result.every(element=> { 
        if(element['subLocality']!=''){
          locality = element['subLocality'];
          return;
        }else  if(element['locality']!=''){
          locality = element['locality'];
          return;
        }
        // else if(element['subAdministrativeArea']!=''){
        //   locality = element['locsubAdministrativeAreaality'];
        //   return;
        // }else if(element['administrativeArea']!=''){
        //   locality = element['administrativeArea'];
        //   return;
        // }
      });
      console.log(locality);
    }
    

    let location={
      latitude: lat,
      longitude: lang,
      cityId:'',
      cityName: locality
    }
    this.globalValues.setLocation(location);
  })
  .catch((error: any) => console.log(error));
}

selectCity(city){
  this.cityid = city.cityId;
    let location={
    latitude: '',
    longitude: '',
    cityId: city.cityId,
    cityName: city.cityName
  }
  this.globalValues.setLocation(location);
  this.globalValues.getLocation().subscribe(location=>{
      console.log(location);
    });
  this.closeModal();
}








    /** Sample Demo data */

    getAppAvailableLocations(){
      
      return  [{cityId: "1", cityName: "Hyderabad", latitude:'17.385',langitude:'78.486', status: "1"},
      {cityId: "2", cityName: "Bangolre", latitude:'12.971',langitude:'77.59', status: "1"},
      {cityId: "3", cityName: "Chennai", latitude:'13.082',langitude:'80.27', status: "1"},
      {cityId: "4", cityName: "Vizag", latitude:'17.686',langitude:'83.218', status: "1"},
      {cityId: "5", cityName: "Khammam", latitude:'17.247',langitude:'80.151', status: "1"}]
        }
}
