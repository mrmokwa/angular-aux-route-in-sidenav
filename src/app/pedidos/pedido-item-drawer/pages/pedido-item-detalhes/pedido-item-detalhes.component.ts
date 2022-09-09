import { Component } from '@angular/core';

import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent {
  constructor(private pidService: PedidoItemDrawerService) {}

  item$ = this.pidService.item$;
}
