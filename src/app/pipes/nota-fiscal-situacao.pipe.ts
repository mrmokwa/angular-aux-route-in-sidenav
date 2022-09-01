import { Pipe, PipeTransform } from '@angular/core';

type Situacao = NotaFiscal['situacao'];

@Pipe({
  name: 'notaFiscalSituacao',
  standalone: true,
})
export class NotaFiscalSituacaoPipe implements PipeTransform {
  transform(value: Situacao): string {
    return value === 'C' ? 'Cancelada' : 'Efetivada';
  }
}

@Pipe({
  name: 'notaFiscalSituacaoClass',
  standalone: true,
})
export class NotaFiscalSituacaoClassPipe implements PipeTransform {
  transform(value: Situacao): string {
    return value === 'C' ? 'erro' : 'sucesso';
  }
}
