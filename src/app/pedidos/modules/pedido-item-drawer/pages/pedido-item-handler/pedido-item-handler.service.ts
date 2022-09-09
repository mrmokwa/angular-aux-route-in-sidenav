import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, combineLatest, filter } from 'rxjs';

@Injectable()
export class PedidoItemHandlerService {
  constructor(private route: ActivatedRoute) {}

  seq$ = this.route.params.pipe(map((params) => +params['seq']));

  pedido$ = this.route.data.pipe(
    map((data) => data['pedido'] as PedidoDetalhado)
  );

  itensPedido$ = this.pedido$.pipe(map((pedido) => pedido.itens));

  itemDaRota$ = combineLatest([this.seq$, this.itensPedido$]).pipe(
    map(([seq, itens]) => itens.find((x) => x.sequencia === seq)),
    filter(Boolean)
  );
}
