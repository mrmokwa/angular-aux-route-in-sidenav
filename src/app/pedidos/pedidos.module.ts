import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';
import { SharedModule } from '../shared/shared.module';
import { PedidoItemListaComponent } from './pedido-item-lista/pedido-item-lista.component';
import { PedidoNotaListaComponent } from './pedido-nota-lista/pedido-nota-lista.component';
import { ItemConfigPipe } from '../pipes/item-config.pipe';
import { PedidoNotaDetalhesComponent } from './pedido-nota-detalhes/pedido-nota-detalhes.component';
import {
  PedItemSituacaoClassPipe,
  PedItemSituacaoPipe,
} from '../pipes/ped-item-situacao.pipe';
import {
  NotaFiscalSituacaoClassPipe,
  NotaFiscalSituacaoPipe,
} from '../pipes/nota-fiscal-situacao.pipe';
import { PedidoDrawerComponent } from './pedido-drawer/pedido-drawer.component';

import { PedidoItemDrawerModule } from './modules/pedido-item-drawer/pedido-item-drawer.module';

const PIPES = [
  ItemConfigPipe,
  PedItemSituacaoPipe,
  PedItemSituacaoClassPipe,
  NotaFiscalSituacaoPipe,
  NotaFiscalSituacaoClassPipe,
];

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoInfoComponent,
    PedidoItemListaComponent,
    PedidoNotaListaComponent,
    PedidoNotaDetalhesComponent,
    PedidoDrawerComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    PIPES,
    PedidoItemDrawerModule,
  ],
})
export class PedidosModule {}
