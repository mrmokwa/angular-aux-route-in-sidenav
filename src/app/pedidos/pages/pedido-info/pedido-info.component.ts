import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { PedidosInfoService } from './pedido-info.service';

@Component({
  selector: 'app-pedido-info',
  templateUrl: './pedido-info.component.html',
  styleUrls: ['./pedido-info.component.scss'],
})
export class PedidoInfoComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: PedidosInfoService
  ) {}

  pedido$ = this.store.pedido$;
  subscription = new Subscription();

  ngOnInit(): void {
    const routerSubscription = this.route.data
      .pipe(
        map((data) => data['pedido'] as PedidoDetalhado),
        tap((x) => console.log(x.pedido))
      )
      .subscribe((pedido) => this.store.setPedido(pedido));

    this.subscription.add(routerSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
