import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoNotaDetalhesComponent } from './components/pedido-nota-detalhes/pedido-nota-detalhes.component';
import { PedidoNotaRoutingModule } from './pedido-nota.routing';
import { NotaFiscalSituacaoPipes } from './pipes/nota-fiscal.pipe';

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
