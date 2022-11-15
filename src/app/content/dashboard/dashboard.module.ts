import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OpcoesPedidosComponent } from './components/opcoes-pedidos/opcoes-pedidos.component';

@NgModule({
  declarations: [MainPageComponent, OpcoesPedidosComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
