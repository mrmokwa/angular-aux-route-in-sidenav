import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoItemRoutingModule } from './pedido-item.routing';
import { PedItemSituacaoPipes } from './pipes/pedido-item.pipe';
import { ItemModule } from '../item/item.module';
import { ItemPipes } from '../item/pipes';

import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemExcluirComponent } from './pages/pedido-item-excluir/pedido-item-excluir.component';
import { PedidoItemAdicionarComponent } from './pages/pedido-item-adicionar/pedido-item-adicionar.component';
import { PedidoItemStoreComponent } from './pages/pedido-item-store/pedido-item-store.component';

import { PedidoItemFormControlComponent } from './components/pedido-item-form-control/pedido-item-form-control.component';
import { PedidoItemDetalhesHeaderComponent } from './components/pedido-item-header/pedido-item-header.component';
import { PedidoItemMenuComponent } from './components/pedido-item-menu/pedido-item-menu.component';
import { PedidoItemInfoIdComponent } from './components/pedido-item-info-id/pedido-item-info-id.component';
import { PedidoItemListaComponent } from './components/pedido-item-lista/pedido-item-lista.component';

@NgModule({
  declarations: [
    PedidoItemDetalhesComponent,
    PedidoItemDetalhesHeaderComponent,
    PedidoItemMenuComponent,
    PedidoItemExcluirComponent,
    PedidoItemInfoIdComponent,
    PedidoItemEditarComponent,
    PedidoItemAdicionarComponent,
    PedidoItemStoreComponent,
    PedidoItemFormControlComponent,
    PedidoItemListaComponent,
  ],
  imports: [
    CommonModule,
    PedidoItemRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PedItemSituacaoPipes,
    ItemPipes,
    ItemModule,
  ],
  exports: [PedidoItemListaComponent],
})
export class PedidoItemModule {}
