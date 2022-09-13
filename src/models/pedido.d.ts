interface Pedido {
  id: number;
  pedido: number;
  divisao: string;
  entregaPrev: Date;
  entregaSolic: Date;
  entrada: Date;
  financeiro: 'A' | 'B' | 'R';
  comercial: 'A' | 'B' | 'R';
  situacao: 'A' | 'C' | 'P' | 'T';
  estado: 'A' | 'F';
  totalPedido: number;
  clienteId: number;
  clienteNome: string;
  clientePedido: string;
  represId: number;
  represNome: string;
  represPedido: string;
}

interface PedidoDetalhado extends Pedido {
  totalAcrescimos: number;
  totalDescontos: number;
  totalFrete: number;
  totalSeguro: number;
  totalIpi: number;
  totalIcmsST: number;
  totalProdutos: number;
  tipoFrete: 'C' | 'F';
  itens: PedidoVendaItem[];
  //orcamentos: Orcamento[];
  notas: NotaFiscal[];
  compradorEmail: string;
  compradorFone: string;
  compradorNome: string;
  condPgtoTipo: 'C' | 'P';
  condPgtoId: number;
  condPgtoParc: string;
  observacoes: string;
  transpId: string;
  transpNome: string;
  tipoNF: string;
  tipoNFDesc: string;
  tabPrecoId: string;
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
  qtdLiquida: number;
  um: string;
  pendente: number;
  unitario: number;
  total: number;
  descontoCascata: string;
  descontoDestacado: number;
  acrescimo: number;
  situacao: 'A' | 'C' | 'P' | 'T';
}
