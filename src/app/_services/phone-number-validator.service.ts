import { Injectable } from '@angular/core';

// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
@Injectable({
  providedIn: 'root'
})
export class PhoneNumberValidatorService {

  constructor() { }
  //https://www.npmjs.com/package/google-libphonenumber
  isPossibleNumber(number){
    return phoneUtil.isPossibleNumber(number);
  }
  isValidNumber(number){
    return phoneUtil.isValidNumber(number)(number);
  }
  isValidNumberForRegion(number,iso_code){
    console.log(number);
    console.log(iso_code);
    console.log(phoneUtil.isValidNumberForRegion(phoneUtil.parse(number, iso_code), iso_code));
    return phoneUtil.isValidNumberForRegion(phoneUtil.parse(number, iso_code), iso_code);
  }
  getRegionCodeForNumber(number){
    return phoneUtil.getRegionCodeForNumber(number);
  }
  getNumberType(number){
    return phoneUtil.getNumberType(number);
  }
  format(number){
    return phoneUtil.format(number);
  }
  formatInOriginalFormat(number){
    return phoneUtil.formatInOriginalFormat(number);
  }
  nationalFormat(number){
    return phoneUtil.format(number,PNF.NATIONAL);
  }
  internationalFormat(number){
    return phoneUtil.format(number,PNF.INTERNATIONAL);
  }





}
