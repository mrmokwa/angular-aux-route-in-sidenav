import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, debounceTime, switchMap, of, map } from 'rxjs';
import { ItemService } from '../item.service';

@Pipe({
  name: 'itemConfig$',
  standalone: true,
})
export class ItemConfigPipe implements PipeTransform {
  private changesSource = new BehaviorSubject<[string, number | undefined]>([
    '',
    undefined,
  ]);
  readonly changes$ = this.changesSource.asObservable();

  constructor(private apiService: ItemService) {}

  transform(item: string, id: number | undefined) {
    this.changesSource.next([item, id]);

    return this.changes$.pipe(
      debounceTime(300),
      switchMap(([item, id]) =>
        item && id ? this.apiService.getConfig(item, id) : of(null)
      ),
      map((item) => item?.campos['descricao'] || '')
    );
  }
}
