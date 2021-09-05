import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(args[0] == 'in-days'){
      return moment(new Date(value), "YYYYMMDD").fromNow();
    }else{
      return value;
    }
  }

}
