import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { combineLatest, delay, finalize, first, map, Observable } from 'rxjs';
import { PedidosInfoService } from 'src/app/pedidos/pages/pedido-info/pedido-info.service';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';
import { PedidoItemHandlerService } from '../pedido-item-handler/pedido-item-handler.service';

@Component({
  selector: 'app-pedido-item-delete',
  templateUrl: './pedido-item-delete.component.html',
  styleUrls: ['./pedido-item-delete.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDeleteComponent implements OnInit {
  constructor(
    private store: PedidosInfoService,
    private pidService: PedidoItemDrawerService,
    private handler: PedidoItemHandlerService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  item$ = this.pidService.item$;
  erro = '';

  excluir() {
    this.pidService.setLoading(true);

    this.retornoPedidoMock()
      .pipe(
        first(),
        finalize(() => this.pidService.setLoading(false))
      )
      .subscribe({
        next: (pedido) => {
          this.store.update(pedido);
          this.pidService.setStore(null);
          this.snackbar.open('Item removido com sucesso');
          this.router.navigate(['/pedidos']);
        },
        error: (resp: HttpErrorResponse) => (this.erro = resp.error),
      });
  }

  retornoPedidoMock(): Observable<PedidoDetalhado> {
    return combineLatest([this.store.pedido$, this.handler.seq$]).pipe(
      delay(1000),
      map(([pedido, seq]) => ({
        ...pedido,
        itens: pedido.itens.filter((x) => x.sequencia !== seq),
      }))
    );
  }
}
