import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-item-lista',
  templateUrl: './pedido-item-lista.component.html',
  styleUrls: ['./pedido-item-lista.component.scss'],
})
export class PedidoItemListaComponent implements OnInit {
  @Input() itens: PedidoVendaItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
