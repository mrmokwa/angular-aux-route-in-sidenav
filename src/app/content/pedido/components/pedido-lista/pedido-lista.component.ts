import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss'],
})
export class PedidoListaComponent implements OnInit {
  @Input() pedido!: Pedido;

  constructor() {}

  ngOnInit(): void {}
}
