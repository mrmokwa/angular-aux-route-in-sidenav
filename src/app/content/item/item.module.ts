import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemConfigFormControlComponent } from './components/item-config-form-control/item-config-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemConfigInfoDialogComponent } from './components/item-config-info-dialog/item-config-info-dialog.component';
import { ItemConfigInfoDialogContentComponent } from './components/item-config-info-dialog-content/item-config-info-dialog-content.component';
import { ItemConfigPesquisaDialogComponent } from './components/item-config-pesquisa-dialog/item-config-pesquisa-dialog.component';
import { ItemPipes } from './pipes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ItemConfigFormControlComponent,
    ItemConfigInfoDialogComponent,
    ItemConfigInfoDialogContentComponent,
    ItemConfigPesquisaDialogComponent,
  ],
  exports: [ItemConfigFormControlComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, ItemPipes],
})
export class ItemModule {}
