import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DrawerAutoModeDirective } from './directives/drawer-auto-mode.directive';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [DrawerAutoModeDirective, ErrorMessageComponent],
  imports: [MaterialModule],
  exports: [MaterialModule, DrawerAutoModeDirective, ErrorMessageComponent],
})
export class SharedModule {}
