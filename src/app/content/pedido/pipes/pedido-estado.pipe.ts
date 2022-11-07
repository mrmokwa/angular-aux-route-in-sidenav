import { Pipe, PipeTransform } from '@angular/core';

type Situacao = Pedido['situacao'];

@Pipe({
  standalone: true,
  name: 'pedidoSituacao',
})
export class PedidoSituacaoPipe implements PipeTransform {
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
  name: 'pedidoSituacaoClass',
  standalone: true,
})
export class PedidoSituacaoClassPipe implements PipeTransform {
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

export const PedidoSituacaoPipes = [
  PedidoSituacaoPipe,
  PedidoSituacaoClassPipe,
];
