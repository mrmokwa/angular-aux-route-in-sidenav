interface Cliente {
  id: number;
  pessoaId: number;
  nome: string;
  abreviado: string;
  natureza: 'J' | 'F' | 'E';
  contato?: string;
  cgc: string;
  email: string;
  transpId?: number;
  transpNome?: string;
  telefone: string;
  celular: any;
  cidade: string;
  estado: string;
  pais: string;
  situacao: 'A' | 'I';
  cadastro: Date;
  alteracao: Date;
  observacoes: string;
  bairro: string;
  cep: number;
  complemento: string;
  endereco: string;
  ie: string;
  represId?: number;
  represNome?: string;
}
