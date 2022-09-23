import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { PedidoStoreService } from './pedido-store.service';

@Component({
  selector: 'app-pedido-store',
  templateUrl: './pedido-store.component.html',
  styleUrls: ['./pedido-store.component.scss'],
})
export class PedidoStoreComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: PedidoStoreService
  ) {}

  pedido$ = this.store.pedido$;
  subscription = new Subscription();

  ngOnInit(): void {
    const routerSubscription = this.route.data
      .pipe(map((data) => data['pedido'] as PedidoDetalhado))
      .subscribe((pedido) => this.store.setPedido(pedido));

    this.subscription.add(routerSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
