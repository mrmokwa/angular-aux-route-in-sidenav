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
  itens: PedidoVendaItem[];
}

interface PedidoVendaItem {
  sequencia: number;
  itemId: string;
  configId: string;
  tabPrecoId: string;
  referencia: string;
  descricao: string;
  complemento: string;
  quantidade: number;
  um: string;
  pendente: number;
  unitario: number;
  total: number;
  descontoCascata: string;
  acrescimo: number;
  situacao: 'A' | 'C' | 'P' | 'T';
}
