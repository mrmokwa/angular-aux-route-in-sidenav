import { Component } from '@angular/core';
import { PedidoStoreService } from '../../pages/pedido-store/pedido-store.service';

@Component({
  selector: 'app-pedido-detalhes',
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.scss'],
})
export class PedidoDetalhesComponent {
  pedido$ = this.store.pedido$;

  constructor(private store: PedidoStoreService) {}
}
