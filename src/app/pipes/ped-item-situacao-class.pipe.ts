import { Pipe, PipeTransform } from '@angular/core';

type Situacao = PedidoVendaItem['situacao'];

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
