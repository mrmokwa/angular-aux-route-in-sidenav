import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss'],
  imports: [CommonModule],
})
export class ClienteDetalhesComponent {
  @Input() cliente!: ClienteDetalhado;
}
