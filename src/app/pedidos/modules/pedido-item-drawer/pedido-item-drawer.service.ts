import { Injectable } from '@angular/core';

import { BehaviorSubject, filter, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemDrawerService {
  private itemSource = new ReplaySubject<PedidoVendaItem | null>(1);
  item$ = this.itemSource.asObservable().pipe(filter(Boolean));

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor() {}

  setStore(data: PedidoVendaItem | null) {
    this.itemSource.next(data);
  }

  setLoading(value: boolean) {
    this.loadingSource.next(value);
  }
}
