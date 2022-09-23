import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { finalize } from 'rxjs';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoStoreResolver implements Resolve<PedidoDetalhado> {
  constructor(
    private apiService: PedidosService,
    private loadingService: GlobalLoaderService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.loadingService.setState(true);

    return this.apiService
      .getById(+route.params['id'])
      .pipe(finalize(() => this.loadingService.setState(false)));
  }
}
