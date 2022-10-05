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

@Pipe({
  name: 'pedItemSituacaoClass',
  standalone: true,
})
export class PedItemSituacaoClassPipe implements PipeTransform {
  transform(situacao: Situacao): string {
    switch (situacao) {
      case 'A':
        return 'sucesso';
      case 'C':
        return 'erro';
      case 'T':
        return 'sucesso';
      default:
        return 'aviso';
    }
  }
}

export const PedItemSituacaoPipes = [
  PedItemSituacaoPipe,
  PedItemSituacaoClassPipe,
];
