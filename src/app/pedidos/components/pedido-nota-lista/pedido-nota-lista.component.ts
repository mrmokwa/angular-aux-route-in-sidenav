import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-nota-lista',
  templateUrl: './pedido-nota-lista.component.html',
  styleUrls: ['./pedido-nota-lista.component.scss'],
})
export class PedidoNotaListaComponent implements OnInit {
  @Input() notas: NotaFiscal[] = [];

  constructor() {}

  ngOnInit(): void {}
}
