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

  private relaodPedidoSource = new Subject<boolean>();
  readonly reloadPedido$ = this.relaodPedidoSource.asObservable();
  setReloadPedido = (value: boolean) => this.relaodPedidoSource.next(value);

  private loadingSource = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSource.asObservable();

  private messageSource = new Subject<string | undefined>();
  readonly message$ = this.messageSource.asObservable();

  setLoading = (value: boolean, message: string | undefined = undefined) => {
    this.loadingSource.next(value);
    this.messageSource.next(message);
  };
}
