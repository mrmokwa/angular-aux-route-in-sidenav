import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, combineLatest, filter } from 'rxjs';
import { PedidoStoreService } from 'src/app/pedidos/pages/pedido-store/pedido-store.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-store',
  templateUrl: './pedido-item-store.component.html',
  styleUrls: ['./pedido-item-store.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemStoreComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private itemStore: PedidoItemService,
    private pedidoStore: PedidoStoreService
  ) {}

  ngOnInit(): void {
    const subs = this.getItemDaRota().subscribe((data) =>
      this.itemStore.setStore(data)
    );
    this.subscription.add(subs);
  }

  ngOnDestroy() {
    this.itemStore.setStore(null);
    this.subscription.unsubscribe();
  }

  getItemDaRota() {
    const seq$ = this.route.params.pipe(map((params) => +params['seq']));

    const itensPedido$ = this.pedidoStore.pedido$.pipe(
      map((pedido) => pedido?.itens)
    );

    return combineLatest([seq$, itensPedido$]).pipe(
      map(([seq, itens]) => itens?.find((x) => x.sequencia === seq)),
      filter(Boolean)
    );
  }
}
