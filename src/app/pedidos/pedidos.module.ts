import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PedItemSituacaoPipes } from './modules/pedido-item/pipes/pedido-item.pipe';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';
import { PedidoDrawerComponent } from './components/pedido-drawer/pedido-drawer.component';
import { PedidoItemModule } from './modules/pedido-item/pedido-item.module';
import { PedidoNotaModule } from './modules/pedido-nota/pedido-nota.module';
import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';
import { PedidoNotaListaComponent } from './components/pedido-nota-lista/pedido-nota-lista.component';
import { NotaFiscalSituacaoPipes } from './modules/pedido-nota/pipes/nota-fiscal.pipe';
import { ItemPipes } from '../item/pipes/item.pipe';

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoStoreComponent,
    PedidoItemListaComponent,
    PedidoDrawerComponent,
    PedidoToolbarComponent,
    PedidoNotaListaComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    ItemPipes,
    PedItemSituacaoPipes,
    NotaFiscalSituacaoPipes,
    PedidoItemModule,
    PedidoNotaModule,
  ],
})
export class PedidosModule {}
