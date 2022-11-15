import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PedidoDrawerService } from 'src/app/content/pedido/pages/pedido-drawer/pedido-drawer.service';
import { PedidoItemStoreService } from '../pedido-item-store/pedido-item-store.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent implements OnInit {
  constructor(
    private store: PedidoItemStoreService,
    private drawerService: PedidoDrawerService
  ) {}

  pedido$ = this.store.pedido$;
  item$ = this.store.item$;

  ngOnInit() {
    setTimeout(() =>
      this.item$
        .pipe(untilDestroyed(this))
        .subscribe((item) => this.drawerService.setLoading(!item, 'Carregando'))
    );
  }
}
