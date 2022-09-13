import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
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

  resolve() {
    // P - 525100
    // C - 525089
    // A - 525063
    return this.service.getById(525063).pipe(indicate(this.loading$));
  }
}
