import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoContainerComponent } from './pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';
import { PedidoInfoResolver } from './pedido-info/pedido-info.resolver';
import { PedidoItemDetalhesComponent } from './pedido-item-detalhes/pedido-item-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoContainerComponent,
    resolve: { pedido: PedidoInfoResolver },
    children: [
      {
        path: '',
        component: PedidoInfoComponent,
      },
      {
        path: 'item/:seq',
        component: PedidoItemDetalhesComponent,
        outlet: 'detalhes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
