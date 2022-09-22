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
    private pidService: PedidoItemService,
    private router: Router,
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private service: PedidosService
  ) {}

  item$ = this.pidService.item$;
  erro = '';

  excluir() {
    this.pidService.setLoading(true);

    const { params } = this.activatedRoute.snapshot;
    const id = +params['id'];
    const seq = +params['seq'];

    this.service
      .deleteItem(id, seq)
      .pipe(finalize(() => this.pidService.setLoading(false)))
      .subscribe({
        next: () => {
          this.router.navigate(['/pedidos', id, { outlets: { detalhes: [] } }]);
          this.pidService.setReloadPedido(true);
          this.snackbar.open('Item removido com sucesso');
        },
        error: (resp: HttpErrorResponse) => (this.erro = resp.error),
      });
  }
}
