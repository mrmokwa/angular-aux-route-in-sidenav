import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DrawerAutoModeDirective } from './directives/drawer-auto-mode.directive';
import { FormControlPipe } from './pipes/form-control.pipe';
import { DismissNotifOnSubmitDirective } from './directives/dismiss-notif-on-submit.directive';

const OBJETOS = [
  DrawerAutoModeDirective,
  FormControlPipe,
  DismissNotifOnSubmitDirective,
];

@NgModule({
  declarations: [OBJETOS],
  imports: [MaterialModule],
  exports: [OBJETOS, MaterialModule],
})
export class SharedModule {}
