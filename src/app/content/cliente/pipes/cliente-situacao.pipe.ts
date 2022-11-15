import { Pipe, PipeTransform } from '@angular/core';

type Situacao = Cliente['situacao'];

@Pipe({
  name: 'clienteSituacao',
  standalone: true,
})
export class ClienteSituacaoPipe implements PipeTransform {
  transform(value: Situacao): string {
    switch (value) {
      case 'A':
        return 'Ativo';
      case 'I':
        return 'Inativo';
    }
  }
}

@Pipe({
  name: 'clienteSituacaoClass',
  standalone: true,
})
export class ClienteSituacaoClassPipe implements PipeTransform {
  transform(value: Situacao): string {
    switch (value) {
      case 'A':
        return 'sucesso';
      case 'I':
        return 'erro';
    }
  }
}

export const ClienteSituacaoPipes = [
  ClienteSituacaoPipe,
  ClienteSituacaoClassPipe,
];
