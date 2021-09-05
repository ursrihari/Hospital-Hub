import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subString'
})
export class SubStringPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    return value.substring(args[0],args[1]);
  }
}
