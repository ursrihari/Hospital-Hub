import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { AccountService, AuthService, CachingService,LoaderService } from '@app/_services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-country-code-modal',
  templateUrl: './country-code-modal.page.html',
  styleUrls: ['./country-code-modal.page.scss'],
})
export class CountryCodeModalPage implements OnInit {
  countryCode:string;
  countries=[];
  constructor(private modalController:ModalController, 
    private navParams: NavParams, 
    private loader:LoaderService,
    private cachingService: CachingService,
    private accountService:AccountService,
    private authService:AuthService) { }
  public value = this.navParams.get('value');
  selectedRadioGroup:any;
  selectedRadioItem:any;

  radio_list = [
    {
      id: '1',
      name: '+965 Kuwait',
      value: '965',
      iso_code: 'KW'
    }, {
      id: '2',
      name: '+91 India',
      value: '91',
      iso_code: 'IN'
    }, {
      id: '3',
      name: '+966 Saudi Arabia',
      value: '966',
      iso_code: 'SA'
    }, {
      id: '4',
      name: '+967 Yemen',
      value: '967',
      iso_code: 'YE'
    }, {
      id: '5',
      name: '+968 Oman',
      value: '968',
      iso_code: 'OM'
    }
  ];
  ngOnInit() {
    this.getCountries(false);
  }
  
  getCountries(forceRefresh){
    //this.loader.show();
    this.authService.getCountries(forceRefresh).subscribe( data=>{
      console.log(data);
      this.countries = data;
      // let self = this;
      // setTimeout(function(){
      //   self.loader.hide();
      // },1000);
      
    });
  }
  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
    console.log(event);
    this.countryCode = event.detail.value;
    this.closeModal();
  }

  radioSelect(event) {
    this.selectedRadioItem = event.detail;
  }

  
  closeModal(){
      let selectedCountry:object = this.countries.find(x => x.dial_code == this.countryCode);
      console.log(selectedCountry);
      if(selectedCountry && selectedCountry.hasOwnProperty('dial_code')){
        this.modalController.dismiss({
          'dismissed': true,
          value: {
            country_code: selectedCountry['dial_code'],
            iso_code: selectedCountry['code'],
            name: selectedCountry['name']
          }
        });
      }else{
        this.modalController.dismiss({
          'dismissed': true,
          value: {
            country_code: '',
            iso_code: '',
            name: ''
          }
        });
      }
  }
 
  async refreshData(event?) {
    const refresh = event ? true : false;
    this.authService.getCountries(false).pipe(
      finalize(() => {        
        if (event) {
          event.target.complete();
        }
        let self = this;
      })
    ).subscribe(res => {      
      this.countries = res;
    })
  }
  async clearCache() {
    this.cachingService.clearCachedData();
  }

}
