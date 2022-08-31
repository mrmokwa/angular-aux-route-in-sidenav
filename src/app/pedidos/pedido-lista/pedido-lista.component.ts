import { Component, OnInit } from '@angular/core';

import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss'],
})
export class PedidoListaComponent implements OnInit {
  constructor(private service: PedidosService) {}

  pedidos$ = this.service.getAll();

  ngOnInit(): void {}
}
