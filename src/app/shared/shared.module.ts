import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DrawerAutoModeDirective } from './directives/drawer-auto-mode.directive';
import { FormControlPipe } from './pipes/form-control.pipe';

const OBJETOS = [DrawerAutoModeDirective, FormControlPipe];

@NgModule({
  declarations: [OBJETOS],
  imports: [MaterialModule],
  exports: [OBJETOS, MaterialModule],
})
export class SharedModule {}
