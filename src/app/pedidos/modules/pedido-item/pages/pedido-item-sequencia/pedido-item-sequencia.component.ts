import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, combineLatest, filter } from 'rxjs';
import { PedidosInfoService } from 'src/app/pedidos/pages/pedido-info/pedido-info.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-sequencia',
  templateUrl: './pedido-item-sequencia.component.html',
  styleUrls: ['./pedido-item-sequencia.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemSequenciaComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  constructor(
    private store: PedidoItemService,
    private route: ActivatedRoute,
    private pedido: PedidosInfoService
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

    const itensPedido$ = this.pedido.pedido$.pipe(
      map((pedido) => pedido?.itens)
    );

    return combineLatest([seq$, itensPedido$]).pipe(
      map(([seq, itens]) => itens?.find((x) => x.sequencia === seq)),
      filter(Boolean)
    );
  }
}
