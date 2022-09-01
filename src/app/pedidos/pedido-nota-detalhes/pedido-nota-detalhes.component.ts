import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-pedido-nota-detalhes',
  templateUrl: './pedido-nota-detalhes.component.html',
  styleUrls: ['./pedido-nota-detalhes.component.scss'],
})
export class PedidoNotaDetalhesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  div$ = this.route.params.pipe(map((params) => params['div']));
  ser$ = this.route.params.pipe(map((params) => params['ser']));
  nro$ = this.route.params.pipe(map((params) => +params['nro']));

  notas$ = this.route.data.pipe(
    map((data) => data['pedido'] as PedidoDetalhado),
    map((pedido) => pedido.notas)
  );

  nota$ = combineLatest([this.div$, this.ser$, this.nro$, this.notas$]).pipe(
    map(([div, ser, nro, itens]) =>
      itens.find(
        (x) => x.divisao === div && x.serie === ser && x.documento === nro
      )
    )
  );

  ngOnInit(): void {}
}
