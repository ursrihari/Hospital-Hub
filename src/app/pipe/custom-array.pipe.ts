import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customArray'
})
export class CustomArrayPipe implements PipeTransform {

  transform(array: any[], ...args: any[]): any {
    console.log(args[0]);
    console.log(args[1]);
    console.log(JSON.stringify(array.slice(args[0], args[1])));
    return array.slice(args[0], args[1]);
  }

}
