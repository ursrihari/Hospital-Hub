import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customArray'
})
export class CustomArrayPipe implements PipeTransform {

  transform(array: any[], ...args: any[]): any {
    console.log(array.slice(args[0], args[1]));
    return array.slice(args[0], args[1]);
  }

}
