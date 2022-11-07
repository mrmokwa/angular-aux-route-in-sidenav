import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, switchMap, startWith, tap, finalize, debounceTime } from 'rxjs';
import { ItemService } from '../../item.service';

export interface ItemConfigPesquisaDialogData {
  itemId: string;
}

@Component({
  selector: 'app-item-config-pesquisa-dialog',
  templateUrl: './item-config-pesquisa-dialog.component.html',
  styleUrls: ['./item-config-pesquisa-dialog.component.scss'],
  host: { class: 'flex-container' },
})
export class ItemConfigPesquisaDialogComponent implements OnInit {
  pesquisa = new FormControl('', { nonNullable: true });
  loading = true;

  constructor(
    private itemService: ItemService,
    @Inject(MAT_DIALOG_DATA)
    public data: ItemConfigPesquisaDialogData
  ) {}

  ngOnInit(): void {}

  config$ = this.pesquisa.valueChanges.pipe(
    tap(() => (this.loading = true)),
    debounceTime(300),
    startWith(''),
    switchMap((pesquisa) =>
      this.itemService
        .getAllConfigs(this.data.itemId, pesquisa)
        .pipe(finalize(() => (this.loading = false)))
    ),
    map((resposta) => resposta.data)
  );
}
