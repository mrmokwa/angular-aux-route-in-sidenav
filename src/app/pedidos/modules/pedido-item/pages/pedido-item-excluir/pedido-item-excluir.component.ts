import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

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
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private apiService: PedidosService
  ) {}

  item$ = this.itemStore.item$;
  erro = '';

  excluir() {
    this.itemStore.setLoading(true);

    const id = +this.activatedRoute.snapshot.params['id'];
    const seq = +this.activatedRoute.snapshot.params['seq'];

    this.apiService
      .deleteItem(id, seq)
      .pipe(finalize(() => this.itemStore.setLoading(false)))
      .subscribe({
        next: () => this.onDeleteSuccess(id),
        error: (resp: HttpErrorResponse) => (this.erro = resp.error),
      });
  }

  onDeleteSuccess(pedidoId: number) {
    this.router.navigate(['/pedidos', pedidoId, { outlets: { detalhes: [] } }]);
    this.itemStore.setReloadPedido(true);
    this.snackbar.open('Item removido com sucesso');
  }
}
