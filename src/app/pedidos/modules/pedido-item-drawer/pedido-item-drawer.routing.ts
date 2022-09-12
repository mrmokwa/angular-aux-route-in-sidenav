import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoItemDeleteComponent } from './pages/pedido-item-delete/pedido-item-delete.component';

import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemHandlerComponent } from './pages/pedido-item-handler/pedido-item-handler.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoItemHandlerComponent,
    children: [
      {
        path: '',
        component: PedidoItemDetalhesComponent,
      },
      {
        path: 'delete',
        component: PedidoItemDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoItemDrawerRoutingModule {}