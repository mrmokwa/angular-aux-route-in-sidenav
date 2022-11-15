import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, map } from 'rxjs';
import { applyServerErrors } from 'src/app/core/rxjs/applyServerErrors';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidoStoreService } from 'src/app/content/pedido/pages/pedido-store/pedido-store.service';
import { PedidosService } from 'src/app/content/pedido/pedidos.service';
import { PedidoItemStoreService } from '../pedido-item-store/pedido-item-store.service';
import { PedidoDrawerService } from 'src/app/content/pedido/pages/pedido-drawer/pedido-drawer.service';

@Component({
  selector: 'app-pedido-item-adicionar',
  templateUrl: './pedido-item-adicionar.component.html',
  styleUrls: ['./pedido-item-adicionar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemAdicionarComponent {
  form = this.fb.group({
    itemId: this.fb.control('EXL-516C', [Validators.required]),
    configId: this.fb.control(''),
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
    private itemStore: PedidoItemStoreService,
    private pedidoStore: PedidoStoreService,
    private drawerService: PedidoDrawerService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.drawerService.setLoading(true, 'Incluindo novo item');

    this.apiService
      .adicionarItem(this.id, this.form.getRawValue())
      .pipe(
        applyServerErrors(this.form),
        finalize(() => this.drawerService.setLoading(false))
      )
      .subscribe({
        next: (item: PedidoVendaItem) => this.onSuccess(item),
        error: (e: HttpErrorResponse) => this.notification.error(e.error),
      });
  }

  private onSuccess({ sequencia }: PedidoVendaItem) {
    this.itemStore.setReloadPedido(true);
    this.notification.success('Item adicionado com sucesso');
    this.router.navigate(['..', sequencia], { relativeTo: this.route });
  }

  private get id() {
    return +this.route.snapshot.params['id'];
  }

  id$ = this.route.params.pipe(map((params) => +params['id']));

  pedido$ = this.pedidoStore.pedido$;
}
