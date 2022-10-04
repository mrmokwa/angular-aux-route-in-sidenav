import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PedidoStoreService } from 'src/app/pedidos/pages/pedido-store/pedido-store.service';
import { PedidoItemService } from '../../pedido-item.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent implements OnInit {
  constructor(
    private itemStore: PedidoItemService,
    private pedidoStore: PedidoStoreService
  ) {}

  pedido$ = this.pedidoStore.pedido$;
  item$ = this.itemStore.item$;

  ngOnInit() {
    setTimeout(() =>
      this.item$
        .pipe(untilDestroyed(this))
        .subscribe((item) => this.itemStore.setLoading(!item, 'Carregando'))
    );
  }
}
