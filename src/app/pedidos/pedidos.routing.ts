import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoItemDrawerModule } from './modules/pedido-item-drawer/pedido-item-drawer.module';
import { PedidoInfoComponent } from './pages/pedido-info/pedido-info.component';
import { PedidoInfoResolver } from './pages/pedido-info/pedido-info.resolver';
import { PedidoNotaDetalhesComponent } from './modules/pedido-nota-drawer/pedido-nota-detalhes/pedido-nota-detalhes.component';

const routes: Routes = [
  {
    path: ':id',
    component: PedidoContainerComponent,
    resolve: { pedido: PedidoInfoResolver },
    children: [
      {
        path: '',
        component: PedidoInfoComponent,
      },
      {
        path: 'item/:seq',
        loadChildren: () => PedidoItemDrawerModule,
        outlet: 'detalhes',
      },
      {
        path: 'nota/:div/:ser/:nro',
        component: PedidoNotaDetalhesComponent,
        outlet: 'detalhes',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '525063',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
