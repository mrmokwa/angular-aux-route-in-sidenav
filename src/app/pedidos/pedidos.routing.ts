import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoContainerComponent } from './pages/pedido-container/pedido-container.component';
import { PedidoItemModule } from './modules/pedido-item/pedido-item.module';
import { PedidoStoreComponent } from './pages/pedido-store/pedido-store.component';
import { PedidoStoreResolver } from './pages/pedido-store/pedido-store.resolver';
import { PedidoNotaModule } from './modules/pedido-nota/pedido-nota.module';

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
        path: 'item',
        loadChildren: () => PedidoItemModule,
        outlet: 'detalhes',
      },
      {
        path: 'nota/:div/:ser/:nro',
        loadChildren: () => PedidoNotaModule,
        outlet: 'detalhes',
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
