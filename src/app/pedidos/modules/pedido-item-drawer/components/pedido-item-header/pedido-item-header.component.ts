import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pedido-item-header',
  templateUrl: './pedido-item-header.component.html',
  styleUrls: ['./pedido-item-header.component.scss'],
})
export class PedidoItemDetalhesHeaderComponent {
  @Input() pedido!: PedidoDetalhado;
  @Input() item!: PedidoVendaItem;
}
