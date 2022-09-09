import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, delay, filter, first, map } from 'rxjs';
import { PedidosInfoService } from '../../pedido-info/pedido-info.service';
import { PedidoItemDrawerService } from '../pedido-item-drawer.service';
import { PedidoItemHandlerService } from '../pedido-item-handler/pedido-item-handler.service';

@Component({
  selector: 'app-pedido-item-delete',
  templateUrl: './pedido-item-delete.component.html',
  styleUrls: ['./pedido-item-delete.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDeleteComponent implements OnInit {
  constructor(
    private store: PedidosInfoService,
    private pidService: PedidoItemDrawerService,
    private handler: PedidoItemHandlerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  item$ = this.pidService.item$.pipe(filter(Boolean));

  excluir() {
    this.pidService.setLoading(true);

    combineLatest([this.store.pedido$, this.handler.seq$])
      .pipe(
        first(),
        delay(1000),
        map(([pedido, seq]) => ({
          ...pedido,
          itens: pedido.itens.filter((x) => x.sequencia !== seq),
        }))
      )
      .subscribe((pedido) => {
        this.store.update(pedido);
        this.pidService.setStore(null);
        this.pidService.setLoading(false);
        this.router.navigate(['/pedidos', { outlets: { detalhes: null } }]);
      });
  }
}
