import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pedido-item-info-id',
  templateUrl: './pedido-item-info-id.component.html',
  styleUrls: ['./pedido-item-info-id.component.scss'],
})
export class PedidoItemInfoIdComponent {
  @Input() item!: PedidoVendaItem;
}
