import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoItemDetalhesHeaderComponent } from './components/pedido-item-header/pedido-item-header.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemMenuComponent } from './components/pedido-item-menu/pedido-item-menu.component';
import { PedidoItemDeleteComponent } from './pages/pedido-item-delete/pedido-item-delete.component';
import { PedidoItemHandlerComponent } from './pages/pedido-item-handler/pedido-item-handler.component';
import { PedidoItemInfoIdComponent } from './components/pedido-item-info-id/pedido-item-info-id.component';
import { PedidoItemDrawerRoutingModule } from './pedido-item-drawer.routing';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';

import { ItemConfigPipe } from 'src/app/pipes/item-config.pipe';
import {
  PedItemSituacaoClassPipe,
  PedItemSituacaoPipe,
} from 'src/app/pipes/ped-item-situacao.pipe';

const PIPES = [PedItemSituacaoClassPipe, PedItemSituacaoPipe, ItemConfigPipe];

@NgModule({
  declarations: [
    PedidoItemDetalhesComponent,
    PedidoItemDetalhesHeaderComponent,
    PedidoItemMenuComponent,
    PedidoItemDeleteComponent,
    PedidoItemHandlerComponent,
    PedidoItemInfoIdComponent,
    PedidoItemEditarComponent,
  ],
  imports: [
    CommonModule,
    PedidoItemDrawerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PIPES,
  ],
})
export class PedidoItemDrawerModule {}
