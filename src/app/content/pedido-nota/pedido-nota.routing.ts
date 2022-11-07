import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoNotaDetalhesComponent } from './components/pedido-nota-detalhes/pedido-nota-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoNotaDetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoNotaRoutingModule {}
