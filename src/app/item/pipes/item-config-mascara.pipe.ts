import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascara',
  standalone: true,
})
export class ItemConfigMascaraPipe implements PipeTransform {
  transform = (mascara: string) => mascara.replace(/(^\#+|\#+$)/gm, '');
}
