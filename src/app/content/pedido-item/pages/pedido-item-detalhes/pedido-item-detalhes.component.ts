import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PedidoDrawerService } from 'src/app/content/pedido/components/pedido-drawer/pedido-drawer.service';
import { PedidoStoreService } from 'src/app/content/pedido/pages/pedido-store/pedido-store.service';
import { PedidoItemService } from '../../pedido-item.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-item-detalhes',
  templateUrl: './pedido-item-detalhes.component.html',
  styleUrls: ['./pedido-item-detalhes.component.scss'],
})
export class PedidoItemDetalhesComponent implements OnInit {
  constructor(
    private itemStore: PedidoItemService,
    private pedidoStore: PedidoStoreService,
    private drawerService: PedidoDrawerService
  ) {}

  pedido$ = this.pedidoStore.pedido$;
  item$ = this.itemStore.item$;

  ngOnInit() {
    setTimeout(() =>
      this.item$
        .pipe(untilDestroyed(this))
        .subscribe((item) => this.drawerService.setLoading(!item, 'Carregando'))
    );
  }
}
