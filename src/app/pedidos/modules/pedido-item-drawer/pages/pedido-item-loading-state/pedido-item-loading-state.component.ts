import { Component } from '@angular/core';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-loading-state',
  templateUrl: './pedido-item-loading-state.component.html',
  styleUrls: ['./pedido-item-loading-state.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemLoadingStateComponent {
  loading$ = this.store.loading$;

  constructor(private store: PedidoItemDrawerService) {}
}
