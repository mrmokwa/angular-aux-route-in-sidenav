import { Component } from '@angular/core';
import { PedidosInfoService } from 'src/app/pedidos/pages/pedido-info/pedido-info.service';

import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent {
  constructor(
    private pidService: PedidoItemDrawerService,
    private store: PedidosInfoService
  ) {}

  pedido$ = this.store.pedido$;

  item$ = this.pidService.item$;
}
