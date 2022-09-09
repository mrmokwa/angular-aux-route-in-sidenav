import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoItemDetalhesHeaderComponent } from './pedido-item-header/pedido-item-header.component';
import { PedidoItemDetalhesComponent } from './pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemMenuComponent } from './pedido-item-menu/pedido-item-menu.component';

import { PedidoItemDrawerRoutingModule } from './pedido-item-drawer.routing';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  PedItemSituacaoClassPipe,
  PedItemSituacaoPipe,
} from 'src/app/pipes/ped-item-situacao.pipe';
import { ItemConfigPipe } from 'src/app/pipes/item-config.pipe';
import { PedidoItemDeleteComponent } from './pedido-item-delete/pedido-item-delete.component';
import { PedidoItemHandlerComponent } from './pedido-item-handler/pedido-item-handler.component';
import { PedidoItemInfoIdComponent } from './pedido-item-info-id/pedido-item-info-id.component';

const PIPES = [PedItemSituacaoClassPipe, PedItemSituacaoPipe, ItemConfigPipe];

const COMPONENTS = [
  PedidoItemDetalhesComponent,
  PedidoItemDetalhesHeaderComponent,
  PedidoItemMenuComponent,
];

@NgModule({
  declarations: [
    COMPONENTS,
    PedidoItemDeleteComponent,
    PedidoItemHandlerComponent,
    PedidoItemInfoIdComponent,
  ],
  imports: [CommonModule, PedidoItemDrawerRoutingModule, SharedModule, PIPES],
})
export class PedidoItemDrawerModule {}
