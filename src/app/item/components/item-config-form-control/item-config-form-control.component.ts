import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ItemService } from '../../item.service';
import {
  ItemConfigInfoDialogComponent,
  ItemConfigInfoDialogData,
} from '../item-config-info-dialog/item-config-info-dialog.component';

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
    this.onConfigChanges(false);
    this.handleChanges();
  }

  handleChanges() {
    const itemChanges$ = this.itemControl.valueChanges.pipe(
      switchMap((itemId) =>
        this.itemService.get(itemId).pipe(catchError(() => EMPTY))
      )
    );

    const isItemConfig$ = itemChanges$.pipe(
      map((item) => item.configurado === 'S')
    );

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
    }

    this.configControl.updateValueAndValidity();
  }

  viewInfo() {
    const data: ItemConfigInfoDialogData = {
      itemId: this.itemControl.value,
      configId: this.configControl.value,
    };

    this.dialog.open(ItemConfigInfoDialogComponent, { data });
  }

  pesquisar() {
    this.itemService
      .getAllConfigs(this.itemControl.value)
      .subscribe((x) => console.log(x));
  }
}
