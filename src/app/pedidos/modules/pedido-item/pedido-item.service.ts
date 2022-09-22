import { Injectable } from '@angular/core';

import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemService {
  constructor() {}

  private itemSource = new ReplaySubject<PedidoVendaItem | null>(1);
  item$ = this.itemSource.asObservable();
  setStore = (data: PedidoVendaItem | null) => this.itemSource.next(data);

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();
  setLoading = (value: boolean) => this.loadingSource.next(value);

  private relaodPedidoSource = new Subject<boolean>();
  reloadPedido$ = this.relaodPedidoSource.asObservable();
  setReloadPedido = (value: boolean) => this.relaodPedidoSource.next(value);
}
