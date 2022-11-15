import { Injectable } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { PedidoStoreService } from 'src/app/content/pedido/pages/pedido-store/pedido-store.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemStoreService {
  constructor(private store: PedidoStoreService) {}

  private itemSource = new ReplaySubject<PedidoVendaItem | null>(1);
  readonly item$ = this.itemSource.asObservable();
  setStore = (data: PedidoVendaItem | null) => this.itemSource.next(data);

  refreshPedido = () => this.store.refresh();

  get pedido$() {
    return this.store.pedido$;
  }
}
