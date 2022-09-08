import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoItemDetalhesHeaderComponent } from './pedido-item-detalhes-header/pedido-item-detalhes-header.component';
import { PedidoItemDetalhesComponent } from './pedido-item-detalhes/pedido-item-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  PedItemSituacaoClassPipe,
  PedItemSituacaoPipe,
} from 'src/app/pipes/ped-item-situacao.pipe';
import { ItemConfigPipe } from 'src/app/pipes/item-config.pipe';
import { PedidoItemMenuComponent } from './pedido-item-menu/pedido-item-menu.component';

@NgModule({
  declarations: [
    PedidoItemDetalhesComponent,
    PedidoItemDetalhesHeaderComponent,
    PedidoItemMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PedItemSituacaoPipe,
    PedItemSituacaoClassPipe,
    ItemConfigPipe,
  ],
  exports: [PedidoItemDetalhesComponent],
})
export class PedidoItemDrawerModule {}
