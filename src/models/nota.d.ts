interface NotaFiscal {
  divisao: string;
  serie: string;
  documento: number;
  chave: string;
  emissao: Date;
  totalNota: number;
  totalProdutos: number;
  situacao: 'E' | 'C';
  emitenteTipo: 'C' | 'F';
  emitenteId: number;
  emitenteNome: string;
  represId: number;
  represNome: string;
  transportadora: string;
  frete: 'CIF' | 'FOB';
}
