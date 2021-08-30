import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-country-code-modal',
  templateUrl: './country-code-modal.page.html',
  styleUrls: ['./country-code-modal.page.scss'],
})
export class CountryCodeModalPage implements OnInit {
  countryCode:string;
  
  constructor(private modalController:ModalController, private navParams: NavParams) { }
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
  ngOnInit() {}
  
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
      let selectedCountry:object = this.radio_list.find(x => x.value == this.countryCode);
      if(selectedCountry && selectedCountry.hasOwnProperty('value')){
        this.modalController.dismiss({
          'dismissed': true,
          value: {
            country_code: selectedCountry['value'],
            iso_code: selectedCountry['iso_code'],
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

}
