import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoNotaDetalhesComponent } from './pedido-nota-detalhes/pedido-nota-detalhes.component';
import { PedidoNotaListaComponent } from './pedido-nota-lista/pedido-nota-lista.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NotaFiscalSituacaoClassPipe,
  NotaFiscalSituacaoPipe,
} from 'src/app/pipes/nota-fiscal-situacao.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PedidoNotaListaComponent, PedidoNotaDetalhesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NotaFiscalSituacaoClassPipe,
    NotaFiscalSituacaoPipe,
  ],
  exports: [PedidoNotaDetalhesComponent, PedidoNotaListaComponent],
})
export class PedidoNotaDrawerModule {}
