import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY, finalize, of } from 'rxjs';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { PedidosService } from '../../pedidos.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoStoreResolver implements Resolve<PedidoDetalhado | null> {
  constructor(
    private apiService: PedidosService,
    private loadingService: GlobalLoaderService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.loadingService.setState(true);

    return this.apiService.getById(+route.params['id']).pipe(
      finalize(() => this.loadingService.setState(false)),
      catchError(() => of(null))
    );
  }
}
