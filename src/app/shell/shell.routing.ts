import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosModule } from '../pedidos/pedidos.module';
import { ShellContainerComponent } from './shell-container/shell-container.component';

const routes: Routes = [
  {
    path: '',
    component: ShellContainerComponent,
    children: [
      {
        path: 'pedidos',
        loadChildren: () => PedidosModule,
      },
      {
        path: '**',
        redirectTo: 'pedidos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
