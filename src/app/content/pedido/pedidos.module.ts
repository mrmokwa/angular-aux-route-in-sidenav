import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';
import { PedidoDrawerComponent } from './components/pedido-drawer/pedido-drawer.component';
import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';
import { PedidoNotaListaComponent } from './components/pedido-nota-lista/pedido-nota-lista.component';
import { ItemPipes } from '../item/pipes';
import { PedidoItemModule } from '../pedido-item/pedido-item.module';
import { PedItemSituacaoPipes } from '../pedido-item/pipes/pedido-item.pipe';
import { PedidoNotaModule } from '../pedido-nota/pedido-nota.module';
import { NotaFiscalSituacaoPipes } from '../pedido-nota/pipes/nota-fiscal.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

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
