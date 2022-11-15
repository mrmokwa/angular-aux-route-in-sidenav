import { Component } from '@angular/core';
import { PedidoStoreService } from '../../pages/pedido-store/pedido-store.service';

@Component({
  selector: 'app-pedido-situacao',
  templateUrl: './pedido-situacao.component.html',
  styleUrls: ['./pedido-situacao.component.scss'],
})
export class PedidoSituacaoComponent {
  pedido$ = this.store.pedido$;

  constructor(private store: PedidoStoreService) {}
}
