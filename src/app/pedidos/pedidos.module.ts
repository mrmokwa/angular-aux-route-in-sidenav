import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PedItemSituacaoClassPipe,
  PedItemSituacaoPipe,
} from '../pipes/ped-item-situacao.pipe';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pages/pedido-info/pedido-info.component';
import { SharedModule } from '../shared/shared.module';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';
import { ItemConfigPipe } from '../pipes/item-config.pipe';
import { PedidoDrawerComponent } from './components/pedido-drawer/pedido-drawer.component';
import { PedidoItemDrawerModule } from './modules/pedido-item-drawer/pedido-item-drawer.module';
import { PedidoNotaDrawerModule } from './modules/pedido-nota-drawer/pedido-nota-drawer.module';
import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';

const PIPES = [ItemConfigPipe, PedItemSituacaoPipe, PedItemSituacaoClassPipe];

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
    PIPES,
    PedidoItemDrawerModule,
    PedidoNotaDrawerModule,
  ],
})
export class PedidosModule {}
