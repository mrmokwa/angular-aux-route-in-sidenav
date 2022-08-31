import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-container',
  templateUrl: './pedido-container.component.html',
  styleUrls: ['./pedido-container.component.scss'],
})
export class PedidoContainerComponent implements OnInit {
  constructor() {}

  opened = false;

  ngOnInit(): void {}
}
