import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../content/dashboard/dashboard.module';
import { PedidosModule } from '../content/pedido/pedidos.module';
import { ShellContainerComponent } from './shell-container/shell-container.component';

const routes: Routes = [
  {
    path: '',
    component: ShellContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule,
      },
      {
        path: 'pedidos',
        loadChildren: () => PedidosModule,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
