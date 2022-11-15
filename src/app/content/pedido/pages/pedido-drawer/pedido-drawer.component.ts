import { Component } from '@angular/core';
import { PedidoDrawerService } from './pedido-drawer.service';

@Component({
  selector: 'app-pedido-drawer',
  templateUrl: './pedido-drawer.component.html',
  styleUrls: ['./pedido-drawer.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoDrawerComponent {
  loading$ = this.service.loading$;
  message$ = this.service.message$;

  constructor(private service: PedidoDrawerService) {}
}
