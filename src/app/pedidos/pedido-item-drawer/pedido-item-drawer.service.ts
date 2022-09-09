import { Injectable } from '@angular/core';

import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class PedidoItemDrawerService {
  private itemSource = new ReplaySubject<PedidoVendaItem>(1);
  item$ = this.itemSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor() {}

  setStore(data: PedidoVendaItem) {
    this.itemSource.next(data);
  }

  setLoading(value: boolean) {
    this.loadingSource.next(value);
  }
}
