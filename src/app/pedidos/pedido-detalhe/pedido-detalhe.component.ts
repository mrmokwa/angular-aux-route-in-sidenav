import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.scss'],
})
export class PedidoDetalheComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: PedidosService) {}

  pedido$ = new Subject<PedidoDetalhado>().asObservable();

  camposExibir: { nome: string; label: string }[] = [
    { nome: 'totalAcrescimos', label: 'Acréscimos' },
    { nome: 'totalDescontos', label: 'Descontos' },
    { nome: 'totalFrete', label: 'Frete' },
    { nome: 'totalSeguro', label: 'Seguro' },
    { nome: 'totalIpi', label: 'IPI' },
    { nome: 'totalIcmsST', label: 'ICMS-ST' },
    { nome: 'totalProdutos', label: 'Produtos' },
    { nome: 'totalPedido', label: 'Pedido' },
  ];

  ngOnInit(): void {}
}
