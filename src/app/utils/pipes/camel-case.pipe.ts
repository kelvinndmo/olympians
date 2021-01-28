import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }
}
