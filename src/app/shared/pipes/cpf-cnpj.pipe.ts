import { Pipe, PipeTransform } from '@angular/core';

const cpfRegex = new RegExp('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}');

const cnpjRegex = new RegExp(
  '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}'
);

@Pipe({
  name: 'cpfCnpj',
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string, natureza: 'F' | 'J'): string {
    switch (natureza) {
      case 'F':
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
      case 'J':
        return value.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          '$1.$2.$3/$4-$5'
        );
    }
  }
}
