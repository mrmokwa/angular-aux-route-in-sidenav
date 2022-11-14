import { Component } from '@angular/core';
import { PedidoStoreService } from '../../pages/pedido-store/pedido-store.service';

@Component({
  selector: 'app-pedido-totais',
  templateUrl: './pedido-totais.component.html',
  styleUrls: ['./pedido-totais.component.scss'],
})
export class PedidoTotaisComponent {
  pedido$ = this.store.pedido$;

  constructor(private store: PedidoStoreService) {}
}
