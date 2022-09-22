import { Component } from '@angular/core';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-handler',
  templateUrl: './pedido-item-handler.component.html',
  styleUrls: ['./pedido-item-handler.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemHandlerComponent {
  loading$ = this.store.loading$;

  constructor(private store: PedidoItemDrawerService) {}
}
