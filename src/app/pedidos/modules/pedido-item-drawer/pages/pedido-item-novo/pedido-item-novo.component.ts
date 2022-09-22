import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { delay, finalize, of } from 'rxjs';
import { PedidosService } from 'src/app/pedidos/pedidos.service';
import { PedidoItemDrawerService } from '../../pedido-item-drawer.service';
import { PedidoItemNovoService } from './pedido-item-novo.service';

@Component({
  selector: 'app-pedido-item-novo',
  templateUrl: './pedido-item-novo.component.html',
  styleUrls: ['./pedido-item-novo.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemNovoComponent {
  constructor(
    private formService: PedidoItemNovoService,
    private apiService: PedidosService,
    private drawer: PedidoItemDrawerService
  ) {}

  form = this.formService.createAddForm();
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
