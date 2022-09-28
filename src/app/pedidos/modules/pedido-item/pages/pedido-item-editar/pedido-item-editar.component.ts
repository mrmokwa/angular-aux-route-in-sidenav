import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter, finalize } from 'rxjs';
import { applyServerErrors } from 'src/app/core/rxjs/applyServerErrors';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-editar',
  templateUrl: './pedido-item-editar.component.html',
  styleUrls: ['./pedido-item-editar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemEditarComponent implements OnInit, OnDestroy {
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
  subscriptions = new Subscription();

  ngOnInit(): void {
    const subs = this.item$.subscribe((item) => this.form.patchValue(item));
    this.subscriptions.add(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.itemStore.setLoading(true);

    const pedidoId = +this.activatedRoute.snapshot.params['id'];
    const itemSeq = +this.activatedRoute.snapshot.params['seq'];
    const complemento = this.form.get('complemento')!.value;

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
    this.itemStore.setReloadPedido(true);
    this.notification.success('Item alterado com sucesso');
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
