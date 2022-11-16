import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidosService } from '../../pedidos.service';

const MSG_ERRO = 'Não foi possivel carregar o pedido de venda';

@Injectable({
  providedIn: 'root',
})
export class PedidoStoreResolver implements Resolve<PedidoDetalhado | null> {
  constructor(
    private apiService: PedidosService,
    private loadingService: GlobalLoaderService,
    private notificationService: NotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.loadingService.setState(true);

    return this.apiService.getById(+route.params['id']).pipe(
      finalize(() => this.loadingService.setState(false)),
      catchError(() => {
        this.notificationService.error(MSG_ERRO);
        return of(null);
      })
    );
  }
}
