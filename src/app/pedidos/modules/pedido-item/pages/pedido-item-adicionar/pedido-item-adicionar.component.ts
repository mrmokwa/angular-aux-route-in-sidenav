import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-adicionar',
  templateUrl: './pedido-item-adicionar.component.html',
  styleUrls: ['./pedido-item-adicionar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemAdicionarComponent {
  constructor(
    private apiService: PedidosService,
    private store: PedidoItemService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  error = '';
  fb = new FormBuilder().nonNullable;
  form = this.fb.group({
    itemId: this.fb.control(''),
    quantidade: this.fb.control(0),
    unitario: this.fb.control(0),
    complemento: this.fb.control(''),
  });

  submit() {
    const id = +this.route.snapshot.params['id'];

    this.error = '';
    this.store.setLoading(true);

    this.apiService
      .adicionarItem(id, this.form.getRawValue())
      .pipe(finalize(() => this.store.setLoading(false)))
      .subscribe({
        next: ({ sequencia }) => {
          this.store.setReloadPedido(true);
          this.snackbar.open('Item adicionado com sucesso');
          this.router.navigate(['..', sequencia], { relativeTo: this.route });
        },
        error: (e: HttpErrorResponse) => (this.error = e.error),
      });
  }
}
