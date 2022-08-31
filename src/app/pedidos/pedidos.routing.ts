import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoListaComponent } from './pedido-lista/pedido-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
