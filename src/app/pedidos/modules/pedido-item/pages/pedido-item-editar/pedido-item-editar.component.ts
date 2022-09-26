import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, finalize, take } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

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
    private service: PedidosService
  ) {}

  fb = new FormBuilder().nonNullable;
  item$ = this.itemStore.item$;
  form = this.fb.group({ complemento: '' });
  id = +this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.item$
      .pipe(take(1), filter(Boolean))
      .subscribe((item) => this.form.patchValue(item));
  }

  salvar(seq: number) {
    const complemento = this.form.get('complemento')?.getRawValue();
    this.itemStore.setLoading(true);

    this.service
      .complemento(this.id, seq, complemento)
      .pipe(finalize(() => this.itemStore.setLoading(false)))
      .subscribe({
        next: () => {
          this.itemStore.setReloadPedido(true);
          this.notification.success('Item alterado com sucesso');
          this.router.navigate(['..'], { relativeTo: this.activatedRoute });
        },
        error: (e: HttpErrorResponse) => this.notification.error(e.error),
      });
  }
}
