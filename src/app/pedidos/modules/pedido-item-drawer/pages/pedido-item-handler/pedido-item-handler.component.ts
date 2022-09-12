import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, filter, map, Subscription } from 'rxjs';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-handler',
  templateUrl: './pedido-item-handler.component.html',
  styleUrls: ['./pedido-item-handler.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemHandlerComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  loading$ = this.store.loading$;

  constructor(
    private store: PedidoItemDrawerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const subs = this.getItemDaRota().subscribe((data) =>
      this.store.setStore(data)
    );
    this.subscription.add(subs);
  }

  ngOnDestroy() {
    this.store.setStore(null);
    this.subscription.unsubscribe();
  }

  getItemDaRota() {
    const seq$ = this.route.params.pipe(map((params) => +params['seq']));

    const itensPedido$ = this.route.data.pipe(
      map((data) => data['pedido'] as PedidoDetalhado),
      map((pedido) => pedido.itens)
    );

    return combineLatest([seq$, itensPedido$]).pipe(
      map(([seq, itens]) => itens.find((x) => x.sequencia === seq)),
      filter(Boolean)
    );
  }
}
