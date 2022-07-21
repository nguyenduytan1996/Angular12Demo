import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    console.log('My Pipeee: ', value);
    if (value) {
      let x = Number(value);
      return 'Saled: ' + x * 0.8;
    }
    return 'null';
  }
}
