import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription, switchMap, take } from 'rxjs';
import { PedidoItemDrawerService } from '../../modules/pedido-item-drawer/pedido-item-drawer.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({ providedIn: 'root' })
export class PedidosInfoService implements OnDestroy {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  subscription = new Subscription();

  constructor(
    private itemStore: PedidoItemDrawerService,
    private service: PedidosService
  ) {
    this.initialize();
  }

  private initialize() {
    const subs = this.itemStore.reloadPedido$

      .pipe(
        switchMap(() => this.pedido$.pipe(take(1))),
        switchMap((pedido) => this.service.getById(pedido.id))
      )
      .subscribe((pedido) => this.setPedido(pedido));

    this.subscription.add(subs);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
