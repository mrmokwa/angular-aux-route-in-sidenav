import { Pipe, PipeTransform } from '@angular/core';

type Situacao = PedidoVendaItem['situacao'];

@Pipe({
  name: 'pedItemSituacao',
  standalone: true,
})
export class PedItemSituacaoPipe implements PipeTransform {
  transform(situacao: Situacao): string {
    switch (situacao) {
      case 'A':
        return 'Atendido';
      case 'C':
        return 'Cancelado';
      case 'T':
        return 'Transferido';
      default:
        return 'Pendente';
    }
  }
}
