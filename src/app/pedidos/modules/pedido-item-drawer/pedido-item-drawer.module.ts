import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ItemConfigPipe } from 'src/app/pipes/item-config.pipe';
import { PedItemSituacaoPipes } from 'src/app/pipes/ped-item-situacao.pipe';
import { PedidoItemDetalhesHeaderComponent } from './components/pedido-item-header/pedido-item-header.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemMenuComponent } from './components/pedido-item-menu/pedido-item-menu.component';
import { PedidoItemDeleteComponent } from './pages/pedido-item-delete/pedido-item-delete.component';
import { PedidoItemHandlerComponent } from './pages/pedido-item-handler/pedido-item-handler.component';
import { PedidoItemInfoIdComponent } from './components/pedido-item-info-id/pedido-item-info-id.component';
import { PedidoItemDrawerRoutingModule } from './pedido-item-drawer.routing';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemNovoComponent } from './pages/pedido-item-novo/pedido-item-novo.component';
import { PedidoItemSequenciaComponent } from './pages/pedido-item-sequencia/pedido-item-sequencia.component';

@NgModule({
  declarations: [
    PedidoItemDetalhesComponent,
    PedidoItemDetalhesHeaderComponent,
    PedidoItemMenuComponent,
    PedidoItemDeleteComponent,
    PedidoItemHandlerComponent,
    PedidoItemInfoIdComponent,
    PedidoItemEditarComponent,
    PedidoItemNovoComponent,
    PedidoItemSequenciaComponent,
  ],
  imports: [
    CommonModule,
    PedidoItemDrawerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PedItemSituacaoPipes,
    ItemConfigPipe,
  ],
})
export class PedidoItemDrawerModule {}
