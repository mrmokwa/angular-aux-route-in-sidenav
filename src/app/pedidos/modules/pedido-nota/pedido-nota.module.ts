import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoNotaDetalhesComponent } from './pedido-nota-detalhes/pedido-nota-detalhes.component';
import { NotaFiscalSituacaoPipes } from 'src/app/pipes/nota-fiscal-situacao.pipe';
import { PedidoNotaRoutingModule } from './pedido-nota.routing';

@NgModule({
  declarations: [PedidoNotaDetalhesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PedidoNotaRoutingModule,
    NotaFiscalSituacaoPipes,
  ],
  exports: [PedidoNotaDetalhesComponent],
})
export class PedidoNotaModule {}
