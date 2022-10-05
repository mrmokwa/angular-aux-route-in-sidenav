import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-config-form-control',
  templateUrl: './item-config-form-control.component.html',
  styleUrls: ['./item-config-form-control.component.scss'],
})
export class ItemConfigFormControlComponent implements OnInit {
  @Input() configControl!: FormControl;
  @Input() itemControl!: FormControl;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  viewInfo() {
    this.itemService
      .getConfig(this.itemControl.value, this.configControl.value)
      .subscribe((x) => console.log(x));
  }

  pesquisar() {
    this.itemService
      .getAllConfigs(this.itemControl.value)
      .subscribe((x) => console.log(x));
  }
}
