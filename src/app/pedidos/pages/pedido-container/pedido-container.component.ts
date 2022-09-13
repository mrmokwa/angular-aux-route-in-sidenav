import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido-container',
  templateUrl: './pedido-container.component.html',
  styleUrls: ['./pedido-container.component.scss'],
  host: { class: 'flex-container' },
})
export class PedidoContainerComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  opened = false;

  removeOutletRoute = () =>
    this.router.navigate([{ outlets: { detalhes: [] } }], {
      relativeTo: this.activatedRoute,
    });
}
