import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoItemModule } from '../pedido-item/pedido-item.module';
import { PedidoNotaModule } from '../pedido-nota/pedido-nota.module';
import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoStoreResolver } from './pages/pedido-store/pedido-store.resolver';
import { PedidoDetalhesComponent } from './components/pedido-detalhes/pedido-detalhes.component';
import { PedidoTotaisComponent } from './components/pedido-totais/pedido-totais.component';

const routes: Routes = [
  {
    path: ':id',
    component: PedidoContainerComponent,
    children: [
      {
        path: '',
        component: PedidoStoreComponent,
        resolve: { pedido: PedidoStoreResolver },
      },
      {
        outlet: 'detalhes',
        path: 'totais-do-pedido',
        component: PedidoTotaisComponent,
      },
      {
        outlet: 'detalhes',
        path: 'completo',
        component: PedidoDetalhesComponent,
      },
      {
        outlet: 'detalhes',
        path: 'item',
        loadChildren: () => PedidoItemModule,
      },
      {
        outlet: 'detalhes',
        path: 'nota/:div/:ser/:nro',
        loadChildren: () => PedidoNotaModule,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '555774',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
