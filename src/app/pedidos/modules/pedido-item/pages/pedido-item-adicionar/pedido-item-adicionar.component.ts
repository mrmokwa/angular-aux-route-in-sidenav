import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { applyServerErrors } from 'src/app/core/rxjs/applyServerErrors';
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
  form = this.fb.group({
    itemId: this.fb.control('', [Validators.required]),
    quantidade: this.fb.control(0, [
      Validators.required,
      Validators.min(Number.MIN_VALUE),
    ]),
    unitario: this.fb.control(0, [
      Validators.required,
      Validators.min(Number.MIN_VALUE),
    ]),
    complemento: this.fb.control(''),
  });

  constructor(
    private apiService: PedidosService,
    private store: PedidoItemService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.store.setLoading(true);

    this.apiService
      .adicionarItem(this.id, this.form.value)
      .pipe(
        applyServerErrors(this.form),
        finalize(() => this.store.setLoading(false))
      )
      .subscribe({
        next: (item: PedidoVendaItem) => this.onSuccess(item),
        error: (e: HttpErrorResponse) => this.notification.error(e.error),
      });
  }

  private onSuccess({ sequencia }: PedidoVendaItem) {
    this.store.setReloadPedido(true);
    this.notification.success('Item adicionado com sucesso');
    this.router.navigate(['..', sequencia], { relativeTo: this.route });
  }

  private get id() {
    return +this.route.snapshot.params['id'];
  }
}
