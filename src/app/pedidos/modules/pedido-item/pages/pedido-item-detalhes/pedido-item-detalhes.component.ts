import { Component } from '@angular/core';
import { PedidoStoreService } from 'src/app/pedidos/pages/pedido-store/pedido-store.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent {
  constructor(
    private itemStore: PedidoItemService,
    private pedidoStore: PedidoStoreService
  ) {}

  pedido$ = this.pedidoStore.pedido$;
  item$ = this.itemStore.item$;
}
