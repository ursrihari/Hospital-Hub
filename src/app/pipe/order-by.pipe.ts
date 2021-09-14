import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], propertyName: string): any[] {
    console.log(propertyName);
    console.log(value);
    if (propertyName)
      return value.sort((a: any, b: any) => a[propertyName].localeCompare(b[propertyName]));
    else
      return value;
  }

}
