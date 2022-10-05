import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-config-form-control',
  templateUrl: './item-config-form-control.component.html',
  styleUrls: ['./item-config-form-control.component.scss'],
})
export class ItemConfigFormControlComponent implements OnInit {
  @Input() formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
