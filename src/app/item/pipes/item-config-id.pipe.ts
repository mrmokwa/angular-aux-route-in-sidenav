import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemConfigId',
  standalone: true,
})
export class ItemConfigIdPipe implements PipeTransform {
  transform = (obj: { itemId: string; configId: string }) =>
    obj.itemId + (obj.configId ? ` [${obj.configId}]` : '');
}
