import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoListaComponent } from './pedido-lista/pedido-lista.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { SharedModule } from '../shared/shared.module';
import { PedidoDetalhePipe } from './pedido-detalhe/pedido-detalhe.pipe';
import { PedidosRoutingModule } from './pedidos.routing';

@NgModule({
  declarations: [
    PedidoListaComponent,
    PedidoDetalheComponent,
    PedidoDetalhePipe,
  ],
  imports: [CommonModule, PedidosRoutingModule, SharedModule],
})
export class PedidosModule {}
