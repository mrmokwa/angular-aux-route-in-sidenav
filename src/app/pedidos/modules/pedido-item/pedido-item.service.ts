import { Injectable } from '@angular/core';

import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemService {
  constructor() {}

  private itemSource = new ReplaySubject<PedidoVendaItem | null>(1);
  readonly item$ = this.itemSource.asObservable();
  setStore = (data: PedidoVendaItem | null) => this.itemSource.next(data);

  private loadingSource = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSource;
  setLoading = (value: boolean) => this.loadingSource.next(value);

  private relaodPedidoSource = new Subject<boolean>();
  readonly reloadPedido$ = this.relaodPedidoSource.asObservable();
  setReloadPedido = (value: boolean) => this.relaodPedidoSource.next(value);
}
