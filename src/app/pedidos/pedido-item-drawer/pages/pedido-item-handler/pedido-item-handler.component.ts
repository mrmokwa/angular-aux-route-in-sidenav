import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';
import { PedidoItemHandlerService } from './pedido-item-handler.service';

@Component({
  selector: 'app-pedido-item-handler',
  templateUrl: './pedido-item-handler.component.html',
  styleUrls: ['./pedido-item-handler.component.scss'],
  providers: [PedidoItemDrawerService, PedidoItemHandlerService],
  host: { class: 'flex-container' },
})
export class PedidoItemHandlerComponent implements OnInit, OnDestroy {
  constructor(
    private store: PedidoItemDrawerService,
    private handler: PedidoItemHandlerService
  ) {}

  subscription = new Subscription();

  loading$ = this.store.loading$;

  ngOnInit(): void {
    const item$ = this.handler.itemDaRota$;
    const subs = item$.subscribe((data) => this.store.setStore(data));
    this.subscription.add(subs);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
