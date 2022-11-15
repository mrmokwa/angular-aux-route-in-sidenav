import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, combineLatest, filter } from 'rxjs';
import { PedidoItemStoreService } from './pedido-item-store.service';

@UntilDestroy()
@Component({
  selector: 'app-pedido-item-store',
  templateUrl: './pedido-item-store.component.html',
  styleUrls: ['./pedido-item-store.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemStoreComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: PedidoItemStoreService
  ) {}

  ngOnInit(): void {
    this.getItemDaRota()
      .pipe(untilDestroyed(this))
      .subscribe((data) => this.store.setStore(data));
  }

  ngOnDestroy() {
    this.store.setStore(null);
  }

  getItemDaRota() {
    const seq$ = this.route.params.pipe(map((params) => +params['seq']));

    const itensPedido$ = this.store.pedido$.pipe(
      map((pedido) => pedido?.itens)
    );

    return combineLatest([seq$, itensPedido$]).pipe(
      map(([seq, itens]) => itens?.find((x) => x.sequencia === seq)),
      filter(Boolean)
    );
  }
}
