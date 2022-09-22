import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoItemDeleteComponent } from './pages/pedido-item-delete/pedido-item-delete.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemHandlerComponent } from './pages/pedido-item-handler/pedido-item-handler.component';
import { PedidoItemNovoComponent } from './pages/pedido-item-novo/pedido-item-novo.component';
import { PedidoItemSequenciaComponent } from './pages/pedido-item-sequencia/pedido-item-sequencia.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoItemHandlerComponent,
    children: [
      {
        path: 'novo',
        component: PedidoItemNovoComponent,
      },
      {
        path: ':seq',
        component: PedidoItemSequenciaComponent,
        children: [
          {
            path: '',
            component: PedidoItemDetalhesComponent,
          },
          {
            path: 'edit',
            component: PedidoItemEditarComponent,
          },
          {
            path: 'delete',
            component: PedidoItemDeleteComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoItemDrawerRoutingModule {}
