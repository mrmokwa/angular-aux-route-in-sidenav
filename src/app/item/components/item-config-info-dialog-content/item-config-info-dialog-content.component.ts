import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-config-info-dialog-content',
  templateUrl: './item-config-info-dialog-content.component.html',
  styleUrls: ['./item-config-info-dialog-content.component.scss'],
})
export class ItemConfigInfoDialogContentComponent implements OnInit {
  @Input() config!: Configuracao;

  constructor() {}

  ngOnInit(): void {}
}
