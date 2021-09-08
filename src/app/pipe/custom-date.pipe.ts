import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(args[0] == 'in-days'){
      return moment(new Date(value), "YYYYMMDD").fromNow();
    }else if(args[0] == 'format'){
      console.log(value);
      console.log(moment(value,"dd-mm-yyyy"));
      return moment(new Date(value), "dd-mm-yyyy").format(""+args[1]+"");
    }else{
      return value;
    }
  }

}
