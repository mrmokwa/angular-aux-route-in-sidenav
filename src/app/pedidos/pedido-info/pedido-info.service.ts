import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosInfoService {
  private pedidoSource = new ReplaySubject<PedidoDetalhado>(1);
  pedido$ = this.pedidoSource.asObservable();

  constructor() {}

  update = (data: PedidoDetalhado) => this.pedidoSource.next(data);
}
