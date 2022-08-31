import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-pedido-info',
  templateUrl: './pedido-info.component.html',
  styleUrls: ['./pedido-info.component.scss'],
})
export class PedidoInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  pedido$ = this.route.data.pipe(map((data) => data['pedido']));

  ngOnInit(): void {}
}
