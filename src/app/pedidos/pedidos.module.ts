import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos.routing';
import { PedidoContainerComponent } from './pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';
import { SharedModule } from '../shared/shared.module';
import { PedidoItemListaComponent } from './pedido-item-lista/pedido-item-lista.component';
import { PedidoItemDetalhesComponent } from './pedido-item-detalhes/pedido-item-detalhes.component';

@NgModule({
  declarations: [
    PedidoContainerComponent,
    PedidoInfoComponent,
    PedidoItemListaComponent,
    PedidoItemDetalhesComponent,
  ],
  imports: [CommonModule, PedidosRoutingModule, SharedModule],
})
export class PedidosModule {}
