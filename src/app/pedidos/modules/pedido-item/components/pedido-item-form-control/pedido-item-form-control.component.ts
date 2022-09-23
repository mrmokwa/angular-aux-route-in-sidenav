import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pedido-item-form-control',
  templateUrl: './pedido-item-form-control.component.html',
  styleUrls: ['./pedido-item-form-control.component.scss'],
})
export class PedidoItemFormControlComponent {
  @Input() control!: FormControl<string>;
}
