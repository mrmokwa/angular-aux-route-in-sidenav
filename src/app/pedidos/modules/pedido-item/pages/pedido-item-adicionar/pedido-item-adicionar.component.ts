import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { delay, finalize, of } from 'rxjs';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemService } from '../../pedido-item.service';

@Component({
  selector: 'app-pedido-item-adicionar',
  templateUrl: './pedido-item-adicionar.component.html',
  styleUrls: ['./pedido-item-adicionar.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemAdicionarComponent {
  constructor(
    private apiService: PedidosService,
    private drawer: PedidoItemService
  ) {}

  fb = new FormBuilder().nonNullable;
  form = this.fb.group({
    itemId: this.fb.control(''),
    quantidade: this.fb.control(0),
    unitario: this.fb.control(0),
    complemento: this.fb.control(''),
  });
  error = '';

  submit() {
    this.error = '';
    this.drawer.setLoading(true);

    of(true)
      .pipe(
        delay(2000),
        finalize(() => this.drawer.setLoading(false))
      )
      .subscribe(() => {
        console.log('next');
      });
    // this.apiService.complemento();
  }
}
