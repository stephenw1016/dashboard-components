import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettyNumber'
})
export class PrettyNumberPipe implements PipeTransform {

  transform (number: number, fixAmount?: number, unit?: string): string {
    let si = [
      { value: 1E24, symbol: 'Y' },
      { value: 1E21, symbol: 'Z' },
      { value: 1E18, symbol: 'E' },
      { value: 1E15, symbol: 'P' },
      { value: 1E12, symbol: 'T' },
      { value: 1E9,  symbol: 'G' },
      { value: 1E6,  symbol: 'M' },
      { value: 1E3,  symbol: 'k' }
    ];
    let i;
    let siLength = si.length;

    if (number === null) {
      return '--';
    }

    for (i = 0; i < siLength; i++) {
      if (number >= si[i].value) {
        return PrettyNumberPipe.truncate(number / si[i].value, fixAmount) + (unit || si[i].symbol);
      }
    }

    return PrettyNumberPipe.truncate(number, fixAmount) + (unit || '');
  }

  static truncate (number: number, fixAmount = 1) {
    let isFloat = number === Number(number) && number % 1 !== 0;
    return isFloat ? Number(number.toFixed(fixAmount)) : number;
  }
}
