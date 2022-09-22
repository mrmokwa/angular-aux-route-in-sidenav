import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription, switchMap, take } from 'rxjs';
import { indicate } from 'src/app/core/rxjs/indicate';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidoItemService } from '../../modules/pedido-item/pedido-item.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({ providedIn: 'root' })
export class PedidosInfoService implements OnDestroy {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  subscription = new Subscription();

  constructor(
    private itemStore: PedidoItemService,
    private service: PedidosService,
    private loadingService: GlobalLoaderService
  ) {
    this.initialize();
  }

  private initialize() {
    const reload$ = this.itemStore.reloadPedido$.pipe(
      switchMap(() => this.pedido$.pipe(take(1))),
      switchMap((pedido) => this.reloadPedido(pedido.id))
    );

    this.subscription.add(
      reload$.subscribe((pedido) => this.setPedido(pedido))
    );
  }

  private reloadPedido(id: number) {
    return this.service
      .getById(id)
      .pipe(indicate(this.loadingService.loading$));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
