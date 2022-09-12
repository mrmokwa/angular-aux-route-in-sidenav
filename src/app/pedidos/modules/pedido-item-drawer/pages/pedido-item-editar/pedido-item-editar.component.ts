import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';

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
    private activatedRoute: ActivatedRoute
  ) {}

  item$ = this.itemStore.item$;

  ngOnInit(): void {}

  salvar() {
    this.itemStore.setLoading(true);

    of(null)
      .pipe(delay(1000))
      .subscribe(() => {
        this.itemStore.setLoading(false);
        this.snackbar.open('Item alterado com sucesso');
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
  }
}
