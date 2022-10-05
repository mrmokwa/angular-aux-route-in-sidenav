import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemConfigFormControlComponent } from './components/item-config-form-control/item-config-form-control.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemConfigFormControlComponent],
  exports: [ItemConfigFormControlComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class ItemModule {}
