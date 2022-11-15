import { Injectable } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
import { finalize, ReplaySubject, switchMap, take } from 'rxjs';

import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidosService } from '../../pedidos.service';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class PedidoStoreService {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  readonly pedido$ = this.pedidoSource.asObservable();
  setPedido = (data: PedidoDetalhado) => this.pedidoSource.next(data);

  constructor(
    private apiService: PedidosService,
    private loadingService: GlobalLoaderService
  ) {}

  refresh() {
    this.loadingService.setState(true);

    this.pedido$
      .pipe(
        take(1),
        switchMap(({ id }) => this.apiService.getById(id)),
        finalize(() => this.loadingService.setState(false))
      )
      .subscribe((pedido) => this.setPedido(pedido));
  }
}
