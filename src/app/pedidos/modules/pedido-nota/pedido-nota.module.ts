import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoNotaDetalhesComponent } from './components/pedido-nota-detalhes/pedido-nota-detalhes.component';
import { NotaFiscalSituacaoPipes } from 'src/app/pedidos/modules/pedido-nota/pipes/nota-fiscal.pipe';
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
