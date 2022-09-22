import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoItemDeleteComponent } from './pages/pedido-item-delete/pedido-item-delete.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemDrawerComponent } from './pages/pedido-item-drawer/pedido-item-drawer.component';
import { PedidoItemAdicionarComponent } from './pages/pedido-item-adicionar/pedido-item-adicionar.component';
import { PedidoItemStoreComponent } from './pages/pedido-item-store/pedido-item-store.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoItemDrawerComponent,
    children: [
      {
        path: 'novo',
        component: PedidoItemAdicionarComponent,
      },
      {
        path: ':seq',
        component: PedidoItemStoreComponent,
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
export class PedidoItemRoutingModule {}
