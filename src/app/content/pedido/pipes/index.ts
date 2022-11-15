import { PedidoAnalisePipes } from './pedido-analise.pipe';
import { PedidoEstadoPipes } from './pedido-estado.pipe';
import { PedidoSituacaoPipes } from './pedido-situacao.pipe';

export * from './pedido-situacao.pipe';
export * from './pedido-estado.pipe';
export * from './pedido-analise.pipe';

export const PedidoPipes = [
  PedidoSituacaoPipes,
  PedidoEstadoPipes,
  PedidoAnalisePipes,
];
