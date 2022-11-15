import { Pipe, PipeTransform } from '@angular/core';

type Natureza = Cliente['natureza'];

@Pipe({
  name: 'clienteNatureza',
  standalone: true,
})
export class ClienteNaturezaPipe implements PipeTransform {
  transform(value: Natureza): string {
    switch (value) {
      case 'F':
        return 'Física';
      case 'J':
        return 'Jurídica';
      case 'E':
        return 'Estrangeiro';
    }
  }
}
