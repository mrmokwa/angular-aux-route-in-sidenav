import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoFrete',
})
export class TipoFretePipe implements PipeTransform {
  transform(value: 'C' | 'F'): string {
    return value === 'C' ? 'CIF' : 'FOB';
  }
}
