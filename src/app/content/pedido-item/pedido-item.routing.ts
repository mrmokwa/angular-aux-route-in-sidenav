import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoItemExcluirComponent } from './pages/pedido-item-excluir/pedido-item-excluir.component';
import { PedidoItemDetalhesComponent } from './pages/pedido-item-detalhes/pedido-item-detalhes.component';
import { PedidoItemEditarComponent } from './pages/pedido-item-editar/pedido-item-editar.component';
import { PedidoItemAdicionarComponent } from './pages/pedido-item-adicionar/pedido-item-adicionar.component';
import { PedidoItemStoreComponent } from './pages/pedido-item-store/pedido-item-store.component';

const routes: Routes = [
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
        component: PedidoItemExcluirComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoItemRoutingModule {}
