import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { PedidoStoreService } from 'src/app/pedidos/pages/pedido-store/pedido-store.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent implements OnInit, OnDestroy {
  constructor(
    private itemStore: PedidoItemService,
    private pedidoStore: PedidoStoreService
  ) {}

  pedido$ = this.pedidoStore.pedido$;
  item$ = this.itemStore.item$;
  subscriptions = new Subscription();

  ngOnInit() {
    setTimeout(() => this.handleLoadingStateAposInclusaoItem());
  }

  handleLoadingStateAposInclusaoItem() {
    const itemSubs = this.item$.subscribe((item) =>
      this.itemStore.setLoading(!item)
    );

    this.subscriptions.add(itemSubs);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
