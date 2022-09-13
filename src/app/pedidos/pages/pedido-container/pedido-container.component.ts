import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-container',
  templateUrl: './pedido-container.component.html',
  styleUrls: ['./pedido-container.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoContainerComponent {
  constructor(private router: Router) {}

  opened = false;

  removeOutletRoute = () =>
    this.router.navigate([{ outlets: { detalhes: [] } }]);
}
