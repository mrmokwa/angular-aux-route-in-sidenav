import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, filter, finalize, of, take } from 'rxjs';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';
import { PedidoItemEditarService } from './pedido-item-editar.service';

@Component({
  selector: 'app-pedido-item-editar',
  templateUrl: './pedido-item-editar.component.html',
  styleUrls: ['./pedido-item-editar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemEditarComponent implements OnInit {
  constructor(
    private itemStore: PedidoItemDrawerService,
    private snackbar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pedItemEditarService: PedidoItemEditarService
  ) {}

  item$ = this.itemStore.item$;
  form = this.pedItemEditarService.getEditItemForm();

  ngOnInit(): void {
    this.item$
      .pipe(take(1), filter(Boolean))
      .subscribe((item) => this.form.patchValue(item));
  }

  salvar() {
    this.itemStore.setLoading(true);

    of(true)
      .pipe(
        delay(1000),
        finalize(() => this.itemStore.setLoading(false))
      )
      .subscribe(() => {
        this.itemStore.setReloadPedido(true);
        this.snackbar.open('Item alterado com sucesso');
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
  }
}
