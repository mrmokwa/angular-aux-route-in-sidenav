import { Pipe, PipeTransform } from '@angular/core';

type Estado = Pedido['estado'];

@Pipe({
  name: 'pedidoEstado',
  standalone: true,
})
export class PedidoEstadoPipe implements PipeTransform {
  transform(value: Estado): string {
    return value === 'A' ? 'Aberto' : 'Fechado';
  }
}

@Pipe({
  name: 'pedidoEstadoClass',
  standalone: true,
})
export class PedidoEstadoClassPipe implements PipeTransform {
  transform(value: Estado): string {
    return value === 'A' ? 'accent' : '';
  }
}

export const PedidoEstadoPipes = [PedidoEstadoPipe, PedidoEstadoClassPipe];
