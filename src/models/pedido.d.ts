interface Pedido {
  id: number;
  pedido: number;
  divisao: string;
  entrada: Date;
  situacao: 'A' | 'C' | 'P' | 'T';
  totalPedido: number;
  clienteNome: string;
}

interface PedidoDetalhado extends Pedido {
  totalAcrescimos: number;
  totalDescontos: number;
  totalFrete: number;
  totalSeguro: number;
  totalIpi: number;
  totalIcmsST: number;
  totalProdutos: number;
}
