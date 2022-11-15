import { Pipe, PipeTransform } from '@angular/core';

type Status = Pedido['financeiro'] | Pedido['comercial'];

@Pipe({
  name: 'pedidoAnalise',
  standalone: true,
})
export class PedidoAnalisePipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case 'A':
        return 'Aprovado';
      case 'R':
        return 'Rejeitado';
      case 'B':
        return 'Bloqueado';
    }
  }
}

@Pipe({
  name: 'pedidoAnaliseClass',
  standalone: true,
})
export class PedidoAnaliseClassPipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case 'A':
        return 'sucesso';
      case 'R':
        return 'erro';
      case 'B':
        return 'aviso';
    }
  }
}

export const PedidoAnalisePipes = [PedidoAnalisePipe, PedidoAnaliseClassPipe];
