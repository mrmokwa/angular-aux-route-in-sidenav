import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell.routing';
import { SharedModule } from '../shared/shared.module';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [
    ShellContainerComponent,
    MainToolbarComponent,
    MainSidenavComponent
  ],
  imports: [CommonModule, ShellRoutingModule, SharedModule],
})
export class ShellModule {}
