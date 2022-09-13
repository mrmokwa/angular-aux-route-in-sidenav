import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, finalize, first, of } from 'rxjs';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-delete',
  templateUrl: './pedido-item-delete.component.html',
  styleUrls: ['./pedido-item-delete.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDeleteComponent {
  constructor(
    private pidService: PedidoItemDrawerService,
    private router: Router,
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  item$ = this.pidService.item$;
  erro = '';

  excluir() {
    this.pidService.setLoading(true);

    const id = +this.activatedRoute.snapshot.params['id'];

    of(true)
      .pipe(
        first(),
        delay(1000),
        finalize(() => this.pidService.setLoading(false))
      )
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
