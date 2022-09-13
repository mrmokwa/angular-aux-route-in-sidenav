import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription, switchMap } from 'rxjs';
import { PedidoItemDrawerService } from '../../modules/pedido-item-drawer/pedido-item-drawer.service';
import { PedidoInfoResolver } from './pedido-info.resolver';

@Injectable({ providedIn: 'root' })
export class PedidosInfoService implements OnDestroy {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  subscription = new Subscription();

  constructor(
    private itemStore: PedidoItemDrawerService,
    private resolver: PedidoInfoResolver
  ) {
    this.initialize();
  }

  private initialize() {
    const subs = this.itemStore.reloadPedido$
      .pipe(switchMap(() => this.resolver.resolve()))
      .subscribe((pedido) => this.setPedido(pedido));

    this.subscription.add(subs);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
