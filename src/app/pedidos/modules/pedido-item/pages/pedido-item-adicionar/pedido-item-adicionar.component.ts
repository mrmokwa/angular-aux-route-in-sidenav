import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
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
    private notification: NotificationService,
    private router: Router
  ) {}

  error = '';
  fb = new FormBuilder().nonNullable;
  itemId = new FormControl('', { nonNullable: true });
  form = this.fb.group({
    itemId: this.itemId,
    quantidade: this.fb.control(0),
    unitario: this.fb.control(0),
    complemento: this.fb.control(''),
  });

  submit() {
    const id = +this.route.snapshot.params['id'];

    this.store.setLoading(true);

    this.apiService
      .adicionarItem(id, this.form.getRawValue())
      .pipe(finalize(() => this.store.setLoading(false)))
      .subscribe({
        next: ({ sequencia }) => {
          this.store.setReloadPedido(true);
          this.notification.success('Item adicionado com sucesso');
          this.router.navigate(['..', sequencia], { relativeTo: this.route });
        },
        error: (e: HttpErrorResponse) => this.notification.error(e.error),
      });
  }
}
