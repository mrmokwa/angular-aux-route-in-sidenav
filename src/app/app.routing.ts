import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosModule } from './pedidos/pedidos.module';

const routes: Routes = [
  {
    path: 'pedidos',
    loadChildren: () => PedidosModule,
  },
  {
    path: '**',
    redirectTo: 'pedidos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
