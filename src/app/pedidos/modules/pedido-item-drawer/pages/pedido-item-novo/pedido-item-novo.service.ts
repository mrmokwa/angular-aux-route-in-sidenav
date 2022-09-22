import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PedidoItemNovoService {
  private fb = new FormBuilder().nonNullable;

  createAddForm() {
    return this.fb.group({
      itemId: this.fb.control(''),
      quantidade: this.fb.control(0),
      unitario: this.fb.control(0),
      complemento: this.fb.control(''),
    });
  }
}
