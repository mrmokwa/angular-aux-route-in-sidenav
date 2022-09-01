import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SidenavAutoModeDirective } from './directives/sidenav-auto-mode.directive';

@NgModule({
  declarations: [SidenavAutoModeDirective],
  imports: [MaterialModule],
  exports: [MaterialModule, SidenavAutoModeDirective],
})
export class SharedModule {}
