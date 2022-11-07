import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, ReplaySubject, switchMap, take, tap } from 'rxjs';
import { PedidoItemService } from 'src/app/content/pedido-item/pedido-item.service';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidosService } from '../../pedidos.service';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class PedidoStoreService {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  readonly pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  private reload$ = this.itemStore.reloadPedido$.pipe(
    switchMap(() => this.pedido$.pipe(take(1))),
    tap(() => this.loadingService.setState(true)),
    switchMap((pedido) =>
      this.apiService
        .getById(pedido.id)
        .pipe(finalize(() => this.loadingService.setState(false)))
    )
  );

  constructor(
    private itemStore: PedidoItemService,
    private apiService: PedidosService,
    private loadingService: GlobalLoaderService
  ) {
    this.reload$
      .pipe(untilDestroyed(this))
      .subscribe((pedido) => this.setPedido(pedido));
  }
}
