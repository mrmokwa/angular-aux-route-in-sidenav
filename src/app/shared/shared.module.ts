import { NgModule } from '@angular/core';
import { MaterialModule } from '../lib/material/material.module';
import { DrawerAutoModeDirective } from './directives/drawer-auto-mode.directive';
import { FormControlPipe } from './pipes/form-control.pipe';
import { DismissNotifOnSubmitDirective } from './directives/dismiss-notif-on-submit.directive';
import { MoveTopOnNavigationDirective } from './directives/move-top-on-navigation.directive';
import { CpfCnpjPipe } from './pipes/cpf-cnpj.pipe';
import { TipoFretePipe } from './pipes/tipo-frete.pipe';

const OBJETOS = [
  DrawerAutoModeDirective,
  FormControlPipe,
  DismissNotifOnSubmitDirective,
  MoveTopOnNavigationDirective,
  CpfCnpjPipe,
  TipoFretePipe,
];

@NgModule({
  declarations: [OBJETOS],
  imports: [MaterialModule],
  exports: [OBJETOS, MaterialModule],
})
export class SharedModule {}
