import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientList'
})
export class PatientListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
