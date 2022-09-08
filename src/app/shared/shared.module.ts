import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DrawerAutoModeDirective } from './directives/drawer-auto-mode.directive';

@NgModule({
  declarations: [DrawerAutoModeDirective],
  imports: [MaterialModule],
  exports: [MaterialModule, DrawerAutoModeDirective],
})
export class SharedModule {}
