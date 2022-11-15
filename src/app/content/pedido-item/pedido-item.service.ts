import { Injectable } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemService {
  constructor() {}

  private itemSource = new ReplaySubject<PedidoVendaItem | null>(1);
  readonly item$ = this.itemSource.asObservable();
  setStore = (data: PedidoVendaItem | null) => this.itemSource.next(data);

  private relaodPedidoSource = new Subject<boolean>();
  readonly reloadPedido$ = this.relaodPedidoSource.asObservable();
  setReloadPedido = (value: boolean) => this.relaodPedidoSource.next(value);
}
