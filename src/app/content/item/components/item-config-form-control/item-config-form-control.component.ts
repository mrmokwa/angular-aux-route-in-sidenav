import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  catchError,
  EMPTY,
  filter,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { ItemService } from '../../item.service';
import {
  ItemConfigInfoDialogComponent,
  ItemConfigInfoDialogData,
} from '../item-config-info-dialog/item-config-info-dialog.component';
import {
  ItemConfigPesquisaDialogComponent,
  ItemConfigPesquisaDialogData,
} from '../item-config-pesquisa-dialog/item-config-pesquisa-dialog.component';

@UntilDestroy()
@Component({
  selector: 'app-item-config-form-control',
  templateUrl: './item-config-form-control.component.html',
  styleUrls: ['./item-config-form-control.component.scss'],
})
export class ItemConfigFormControlComponent implements OnInit {
  @Input() configControl!: FormControl;
  @Input() itemControl!: FormControl;

  constructor(private dialog: MatDialog, private itemService: ItemService) {}

  ngOnInit(): void {
    this.handleChanges();
  }

  handleChanges() {
    const isItemConfig$ = this.itemControl.valueChanges
      .pipe(
        tap(() => this.configControl.disable()),
        startWith(this.itemControl.value),
        switchMap((itemId) =>
          this.itemService.get(itemId).pipe(catchError(() => EMPTY))
        )
      )
      .pipe(map((item) => item.configurado === 'S'));

    isItemConfig$
      .pipe(untilDestroyed(this))
      .subscribe((config) => this.onConfigChanges(config));
  }

  onConfigChanges(isConfig: boolean) {
    if (isConfig) {
      this.configControl.enable();
      this.configControl.addValidators(Validators.required);
    } else {
      this.configControl.disable();
      this.configControl.setValue('');
      this.configControl.removeValidators(Validators.required);
      this.configControl.markAsUntouched();
    }

    this.configControl.updateValueAndValidity();
  }

  viewInfo(e: Event) {
    e.stopPropagation();

    const data: ItemConfigInfoDialogData = {
      itemId: this.itemControl.value,
      configId: this.configControl.value,
    };

    this.dialog.open(ItemConfigInfoDialogComponent, { data });
  }

  pesquisar(e: Event) {
    e.stopPropagation();

    const data: ItemConfigPesquisaDialogData = {
      itemId: this.itemControl.value,
    };

    this.dialog
      .open(ItemConfigPesquisaDialogComponent, {
        data,
        width: '400px',
        height: '500px',
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe((retorno: string) => this.configControl.setValue(retorno));
  }
}
