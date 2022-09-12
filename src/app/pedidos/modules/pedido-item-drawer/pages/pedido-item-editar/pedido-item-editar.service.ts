import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemEditarService {
  private fb = new FormBuilder().nonNullable;

  constructor() {}

  getEditItemForm() {
    return this.fb.group({ complemento: '' });
  }
}
