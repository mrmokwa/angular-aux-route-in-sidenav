import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoItemDetalhesComponent } from './pedido-item-detalhes/pedido-item-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoItemDetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoItemDrawerRoutingModule {}
