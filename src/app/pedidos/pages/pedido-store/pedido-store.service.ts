import { Injectable, OnDestroy } from '@angular/core';
import { finalize, ReplaySubject, Subscription, switchMap, take } from 'rxjs';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidoItemService } from '../../modules/pedido-item/pedido-item.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({ providedIn: 'root' })
export class PedidoStoreService implements OnDestroy {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  readonly pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  subscription = new Subscription();

  constructor(
    private itemStore: PedidoItemService,
    private apiService: PedidosService,
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
    this.loadingService.setState(true);

    return this.apiService
      .getById(id)
      .pipe(finalize(() => this.loadingService.setState(false)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
