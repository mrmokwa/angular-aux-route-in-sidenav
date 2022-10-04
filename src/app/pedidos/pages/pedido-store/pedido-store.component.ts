import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';
import { PedidoStoreService } from './pedido-store.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-store',
  templateUrl: './pedido-store.component.html',
  styleUrls: ['./pedido-store.component.scss'],
})
export class PedidoStoreComponent implements OnInit {
  pedido$ = this.store.pedido$;

  private routeData$ = this.route.data.pipe(
    map((data) => data['pedido'] as PedidoDetalhado)
  );

  constructor(
    private route: ActivatedRoute,
    private store: PedidoStoreService
  ) {}

  ngOnInit(): void {
    this.routeData$
      .pipe(untilDestroyed(this))
      .subscribe((pedido) => this.store.setPedido(pedido));
  }
}
