import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoNotaRoutingModule } from './pedido-nota.routing';
import { NotaFiscalSituacaoPipes } from './pipes/nota-fiscal.pipe';

import { PedidoNotaDetalhesComponent } from './components/pedido-nota-detalhes/pedido-nota-detalhes.component';
import { PedidoNotaListaComponent } from './components/pedido-nota-lista/pedido-nota-lista.component';

@NgModule({
  declarations: [PedidoNotaListaComponent, PedidoNotaDetalhesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PedidoNotaRoutingModule,
    NotaFiscalSituacaoPipes,
  ],
  exports: [PedidoNotaListaComponent, PedidoNotaDetalhesComponent],
})
export class PedidoNotaModule {}
