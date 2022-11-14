import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { ClienteService } from 'src/app/content/cliente/cliente.service';
import { PedidoStoreService } from '../../pages/pedido-store/pedido-store.service';

@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.scss'],
})
export class PedidoClienteComponent {
  cliente$ = this.store.pedido$.pipe(
    switchMap((pedido) => this.clienteService.get(pedido.clienteId))
  );

  constructor(
    private store: PedidoStoreService,
    private clienteService: ClienteService
  ) {}
}
