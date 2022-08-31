import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pedidoDetalhe',
})
export class PedidoDetalhePipe implements PipeTransform {
  transform(value: PedidoDetalhado, campo: string) {
    return value[campo as keyof PedidoDetalhado];
  }
}
