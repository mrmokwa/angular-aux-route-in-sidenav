import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { PedidosService } from '../../pedidos.service';
import { PedidoItemDrawerService } from '../pedido-item-drawer.service';

@Component({
  selector: 'app-pedido-item-delete',
  templateUrl: './pedido-item-delete.component.html',
  styleUrls: ['./pedido-item-delete.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoItemDeleteComponent implements OnInit {
  constructor(
    private pedidoService: PedidosService,
    private pidService: PedidoItemDrawerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  excluir() {
    this.pidService.setLoading(true);

    of('teste')
      .pipe(delay(1000))
      .subscribe(() => {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
        this.pidService.setLoading(false);
      });

    //this.pedidoService.deleteItem(1, 1).subscribe();
  }
}
