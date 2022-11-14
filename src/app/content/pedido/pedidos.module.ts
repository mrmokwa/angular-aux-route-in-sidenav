import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoItemModule } from '../pedido-item/pedido-item.module';
import { PedidoNotaModule } from '../pedido-nota/pedido-nota.module';

import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';
import { PedidoDrawerComponent } from './components/pedido-drawer/pedido-drawer.component';
import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';
import { PedidoNotaListaComponent } from './components/pedido-nota-lista/pedido-nota-lista.component';
import { NotaFiscalSituacaoPipes } from '../pedido-nota/pipes/nota-fiscal.pipe';
import { PedidoListaComponent } from './components/pedido-lista/pedido-lista.component';
import { PedidoDetalhesComponent } from './components/pedido-detalhes/pedido-detalhes.component';
import { PedidoTotaisComponent } from './components/pedido-totais/pedido-totais.component';

import { ItemPipes } from '../item/pipes';
import { PedidoSituacaoPipes } from './pipes';
import { PedItemSituacaoPipes } from '../pedido-item/pipes/pedido-item.pipe';

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoStoreComponent,
    PedidoItemListaComponent,
    PedidoDrawerComponent,
    PedidoToolbarComponent,
    PedidoNotaListaComponent,
    PedidoListaComponent,
    PedidoDetalhesComponent,
    PedidoTotaisComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    ItemPipes,
    PedItemSituacaoPipes,
    NotaFiscalSituacaoPipes,
    PedidoSituacaoPipes,
    PedidoItemModule,
    PedidoNotaModule,
  ],
})
export class PedidosModule {}
