import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoNotaDetalhesComponent } from './pedido-nota-detalhes/pedido-nota-detalhes.component';
import { PedidoNotaListaComponent } from './pedido-nota-lista/pedido-nota-lista.component';
import { NotaFiscalSituacaoPipes } from 'src/app/pipes/nota-fiscal-situacao.pipe';

@NgModule({
  declarations: [PedidoNotaListaComponent, PedidoNotaDetalhesComponent],
  imports: [CommonModule, SharedModule, RouterModule, NotaFiscalSituacaoPipes],
  exports: [PedidoNotaDetalhesComponent, PedidoNotaListaComponent],
})
export class PedidoNotaDrawerModule {}
