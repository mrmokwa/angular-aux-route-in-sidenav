import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, debounceTime, map, of, switchMap } from 'rxjs';
import { ItemService } from '../item.service';

@Pipe({
  name: 'item$',
  standalone: true,
})
export class ItemPipe implements PipeTransform {
  private changesSource = new BehaviorSubject<string>('');
  readonly changes$ = this.changesSource.asObservable();

  constructor(private apiService: ItemService) {}

  transform(codigo: string | undefined, campo: keyof Item) {
    if (codigo) this.changesSource.next(codigo);

    return this.changes$.pipe(
      debounceTime(300),
      switchMap((value) => this.apiService.get(value)),
      map((item) => item[campo])
    );
  }
}
