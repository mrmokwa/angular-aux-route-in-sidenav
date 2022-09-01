import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'itemConfig',
})
export class ItemConfigPipe implements PipeTransform {
  transform(obj: { itemId: string; configId: string }): string {
    const { itemId, configId } = obj;
    return itemId + (configId ? `[${configId}]` : '');
  }
}
