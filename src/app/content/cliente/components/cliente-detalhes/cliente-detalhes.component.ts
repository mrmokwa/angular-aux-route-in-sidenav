import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteSituacaoPipes } from '../../pipes';

@Component({
  standalone: true,
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss'],
  imports: [CommonModule, SharedModule, ClienteSituacaoPipes],
})
export class ClienteDetalhesComponent {
  @Input() cliente!: Cliente;
}
