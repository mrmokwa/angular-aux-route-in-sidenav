import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { PedidoStoreService } from 'src/app/content/pedido/pages/pedido-store/pedido-store.service';

@Component({
  selector: 'app-pedido-nota-detalhes',
  templateUrl: './pedido-nota-detalhes.component.html',
  styleUrls: ['./pedido-nota-detalhes.component.scss'],
})
export class PedidoNotaDetalhesComponent {
  constructor(
    private route: ActivatedRoute,
    private pedidoStore: PedidoStoreService
  ) {}

  nota$ = combineLatest([this.route.params, this.pedidoStore.pedido$]).pipe(
    map(([params, pedido]) =>
      pedido.notas.find(
        (nota) =>
          nota.divisao === params['div'] &&
          nota.serie === params['ser'] &&
          nota.documento === +params['nro']
      )
    )
  );
}
