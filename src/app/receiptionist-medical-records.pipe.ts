import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiptionistMedicalRecords'
})
export class ReceiptionistMedicalRecordsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
