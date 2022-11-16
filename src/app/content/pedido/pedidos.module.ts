import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoItemModule } from '../pedido-item/pedido-item.module';
import { PedidoNotaModule } from '../pedido-nota/pedido-nota.module';
import { ClienteDetalhesComponent } from '../cliente/components/cliente-detalhes/cliente-detalhes.component';

import { ItemPipes } from '../item/pipes';
import { PedidoPipes } from './pipes';
import { PedItemSituacaoPipes } from '../pedido-item/pipes/pedido-item.pipe';
import { NotaFiscalSituacaoPipes } from '../pedido-nota/pipes/nota-fiscal.pipe';

import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoDrawerComponent } from './pages/pedido-drawer/pedido-drawer.component';

import { PedidoToolbarComponent } from './components/pedido-toolbar/pedido-toolbar.component';
import { PedidoListaComponent } from './components/pedido-lista/pedido-lista.component';
import { PedidoDetalhesComponent } from './components/pedido-detalhes/pedido-detalhes.component';
import { PedidoTotaisComponent } from './components/pedido-totais/pedido-totais.component';
import { PedidoClienteComponent } from './components/pedido-cliente/pedido-cliente.component';

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoStoreComponent,
    PedidoDrawerComponent,
    PedidoToolbarComponent,
    PedidoListaComponent,
    PedidoDetalhesComponent,
    PedidoTotaisComponent,
    PedidoClienteComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    ItemPipes,
    PedItemSituacaoPipes,
    NotaFiscalSituacaoPipes,
    PedidoPipes,
    PedidoItemModule,
    PedidoNotaModule,
    ClienteDetalhesComponent,
  ],
})
export class PedidosModule {}
