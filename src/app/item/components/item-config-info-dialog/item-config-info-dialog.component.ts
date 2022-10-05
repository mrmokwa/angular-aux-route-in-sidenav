import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemService } from '../../item.service';

export type ItemConfigInfoDialogData = {
  itemId: string;
  configId: number;
};

@Component({
  selector: 'app-item-config-info-dialog',
  templateUrl: './item-config-info-dialog.component.html',
  styleUrls: ['./item-config-info-dialog.component.scss'],
})
export class ItemConfigInfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemConfigInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ItemConfigInfoDialogData,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {}

  config$ = this.itemService.getConfig(this.data.itemId, this.data.configId);
}
