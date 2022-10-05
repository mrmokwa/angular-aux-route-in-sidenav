import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedItemSituacaoPipes } from 'src/app/pedidos/modules/pedido-item/pipes/pedido-item.pipe';
import { PedidoItemDetalhesHeaderComponent } from './components/pedido-item-header/pedido-item-header.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemMenuComponent } from './components/pedido-item-menu/pedido-item-menu.component';
import { PedidoItemExcluirComponent } from './pages/pedido-item-excluir/pedido-item-excluir.component';
import { PedidoItemDrawerComponent } from './pages/pedido-item-drawer/pedido-item-drawer.component';
import { PedidoItemInfoIdComponent } from './components/pedido-item-info-id/pedido-item-info-id.component';
import { PedidoItemRoutingModule } from './pedido-item.routing';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemAdicionarComponent } from './pages/pedido-item-adicionar/pedido-item-adicionar.component';
import { PedidoItemStoreComponent } from './pages/pedido-item-store/pedido-item-store.component';
import { PedidoItemFormControlComponent } from './components/pedido-item-form-control/pedido-item-form-control.component';
import { ItemPipes } from 'src/app/item/item.pipe';

@NgModule({
  declarations: [
    PedidoItemDetalhesComponent,
    PedidoItemDetalhesHeaderComponent,
    PedidoItemMenuComponent,
    PedidoItemExcluirComponent,
    PedidoItemDrawerComponent,
    PedidoItemInfoIdComponent,
    PedidoItemEditarComponent,
    PedidoItemAdicionarComponent,
    PedidoItemStoreComponent,
    PedidoItemFormControlComponent,
  ],
  imports: [
    CommonModule,
    PedidoItemRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PedItemSituacaoPipes,
    ItemPipes,
  ],
})
export class PedidoItemModule {}
