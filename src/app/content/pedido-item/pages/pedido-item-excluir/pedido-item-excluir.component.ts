import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidosService } from 'src/app/content/pedido/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';
import { PedidoDrawerService } from 'src/app/content/pedido/pages/pedido-drawer/pedido-drawer.service';

@Component({
  selector: 'app-pedido-item-excluir',
  templateUrl: './pedido-item-excluir.component.html',
  styleUrls: ['./pedido-item-excluir.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemExcluirComponent {
  constructor(
    private itemStore: PedidoItemService,
    private router: Router,
    private notification: NotificationService,
    private activatedRoute: ActivatedRoute,
    private apiService: PedidosService,
    private drawerService: PedidoDrawerService
  ) {}

  item$ = this.itemStore.item$;

  excluir() {
    this.drawerService.setLoading(true, 'Removendo item');

    const id = +this.activatedRoute.snapshot.params['id'];
    const seq = +this.activatedRoute.snapshot.params['seq'];

    this.apiService
      .deleteItem(id, seq)
      .pipe(finalize(() => this.drawerService.setLoading(false)))
      .subscribe({
        next: () => this.onDeleteSuccess(id),
        error: (resp: HttpErrorResponse) => this.notification.error(resp.error),
      });
  }

  private onDeleteSuccess(pedidoId: number) {
    this.router.navigate(['/pedidos', pedidoId, { outlets: { detalhes: [] } }]);
    this.itemStore.setReloadPedido(true);
    this.notification.success('Item removido com sucesso');
  }
}
