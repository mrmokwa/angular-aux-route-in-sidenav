import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PedItemSituacaoPipes } from '../pipes/ped-item-situacao.pipe';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pages/pedido-info/pedido-info.component';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';
import { ItemConfigPipe } from '../pipes/item-config.pipe';
import { PedidoDrawerComponent } from './components/pedido-drawer/pedido-drawer.component';
import { PedidoItemModule } from './modules/pedido-item/pedido-item.module';
import { PedidoNotaDrawerModule } from './modules/pedido-nota-drawer/pedido-nota-drawer.module';
import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoInfoComponent,
    PedidoItemListaComponent,
    PedidoDrawerComponent,
    PedidoToolbarComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    ItemConfigPipe,
    PedItemSituacaoPipes,
    PedidoItemModule,
    PedidoNotaDrawerModule,
  ],
})
export class PedidosModule {}
