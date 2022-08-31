import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { PedidosService } from '../pedidos.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoInfoResolver implements Resolve<PedidoDetalhado> {
  constructor(private service: PedidosService) {}

  resolve() {
    return this.service.getById(525100);
  }
}
