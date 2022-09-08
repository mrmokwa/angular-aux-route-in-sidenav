import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoContainerComponent } from './pedido-container/pedido-container.component';
import { PedidoInfoComponent } from './pedido-info/pedido-info.component';
import { PedidoInfoResolver } from './pedido-info/pedido-info.resolver';
import { PedidoItemDrawerModule } from './pedido-item-drawer/pedido-item-drawer.module';
import { PedidoNotaDetalhesComponent } from './pedido-nota-detalhes/pedido-nota-detalhes.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
