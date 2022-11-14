import { Component } from '@angular/core';
import { finalize, switchMap, take } from 'rxjs';
import { ClienteService } from 'src/app/content/cliente/cliente.service';
import { PedidoStoreService } from '../../pages/pedido-store/pedido-store.service';
import { PedidoDrawerService } from '../pedido-drawer/pedido-drawer.service';

@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.scss'],
})
export class PedidoClienteComponent {
  clienteId$ = this.store.pedido$.pipe(take(1));

  cliente$ = this.clienteId$.pipe(
    switchMap((pedido) => this.clienteService.get(pedido.clienteId)),
    finalize(() => this.drawer.setLoading(false))
  );

  constructor(
    private store: PedidoStoreService,
    private clienteService: ClienteService,
    private drawer: PedidoDrawerService
  ) {
    this.drawer.setLoading(true, 'Carregando o cliente');
  }
}
