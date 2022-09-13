import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { indicate } from 'src/app/core/rxjs/indicate';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoInfoResolver implements Resolve<PedidoDetalhado> {
  constructor(
    private service: PedidosService,
    private loadingService: GlobalLoaderService
  ) {}

  loading$ = this.loadingService.loading$;

  resolve(route: ActivatedRouteSnapshot) {
    return this.service
      .getById(+route.params['id'])
      .pipe(indicate(this.loading$));
  }
}
