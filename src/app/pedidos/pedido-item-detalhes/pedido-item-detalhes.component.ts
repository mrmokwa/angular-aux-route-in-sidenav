import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDetalhesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  seq$ = this.route.params.pipe(map((params) => +params['seq']));

  itens$ = this.route.data.pipe(
    map((data) => data['pedido'] as PedidoDetalhado),
    map((pedido) => pedido.itens)
  );

  item$ = combineLatest([this.seq$, this.itens$]).pipe(
    map(([seq, itens]) => itens.find((x) => x.sequencia === seq))
  );

  ngOnInit(): void {}
}
