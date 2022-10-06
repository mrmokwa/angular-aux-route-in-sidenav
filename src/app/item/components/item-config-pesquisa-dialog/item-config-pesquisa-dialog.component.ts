import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Subject, switchMap, combineLatest, startWith } from 'rxjs';
import { ItemService } from '../../item.service';

export interface ItemConfigPesquisaDialogData {
  itemId: string;
}

@Component({
  selector: 'app-item-config-pesquisa-dialog',
  templateUrl: './item-config-pesquisa-dialog.component.html',
  styleUrls: ['./item-config-pesquisa-dialog.component.scss'],
})
export class ItemConfigPesquisaDialogComponent implements OnInit {
  pesquisa = new FormControl('', { nonNullable: true });

  constructor(
    private itemService: ItemService,
    @Inject(MAT_DIALOG_DATA)
    public data: ItemConfigPesquisaDialogData
  ) {}

  ngOnInit(): void {}

  config$ = this.pesquisa.valueChanges.pipe(
    startWith(''),
    switchMap((pesquisa) =>
      this.itemService.getAllConfigs(this.data.itemId, pesquisa)
    ),
    map((resposta) => resposta.data)
  );
}
