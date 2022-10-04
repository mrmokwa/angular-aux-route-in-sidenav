import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, finalize } from 'rxjs';
import { applyServerErrors } from 'src/app/core/rxjs/applyServerErrors';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-item-editar',
  templateUrl: './pedido-item-editar.component.html',
  styleUrls: ['./pedido-item-editar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemEditarComponent implements OnInit {
  constructor(
    private itemStore: PedidoItemService,
    private notification: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: PedidosService,
    private fb: NonNullableFormBuilder
  ) {}

  item$ = this.itemStore.item$.pipe(filter(Boolean));
  form = this.fb.group({ complemento: '' });

  ngOnInit(): void {
    this.item$
      .pipe(untilDestroyed(this))
      .subscribe((item) => this.form.patchValue(item));
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const pedidoId = +this.activatedRoute.snapshot.params['id'];
    const itemSeq = +this.activatedRoute.snapshot.params['seq'];
    const complemento = this.form.get('complemento')!.value;

    this.itemStore.setLoading(true, 'Atualizando item');

    this.service
      .complemento(pedidoId, itemSeq, complemento)
      .pipe(
        applyServerErrors(this.form),
        finalize(() => this.itemStore.setLoading(false))
      )
      .subscribe({
        next: () => this.onSuccess(),
        error: (e: HttpErrorResponse) => this.notification.error(e.error),
      });
  }

  private onSuccess() {
    this.itemStore.setStore(null);
    this.itemStore.setReloadPedido(true);
    this.notification.success('Item alterado com sucesso');
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
