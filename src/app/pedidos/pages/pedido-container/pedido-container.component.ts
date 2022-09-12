import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-container',
  templateUrl: './pedido-container.component.html',
  styleUrls: ['./pedido-container.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoContainerComponent implements OnInit {
  constructor(private router: Router) {}

  opened = false;

  ngOnInit(): void {}

  removeOutletRoute = () => this.router.navigate(['/pedidos']);
}
