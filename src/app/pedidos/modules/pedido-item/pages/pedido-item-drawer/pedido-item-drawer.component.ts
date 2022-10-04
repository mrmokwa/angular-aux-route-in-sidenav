import { Component } from '@angular/core';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-drawer',
  templateUrl: './pedido-item-drawer.component.html',
  styleUrls: ['./pedido-item-drawer.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDrawerComponent {
  loading$ = this.store.loading$;
  message$ = this.store.message$;

  constructor(private store: PedidoItemService) {}
}
