interface Item {
  id: string;
  descricao: string;
  descComplementar: string;
  referencia: string;
  procedencia: 'C' | 'P';
  um: string;
  umAlt: string;
  fatorConv: number;
  pesoBruto: number;
  pesoLiquido: number;
  grupoId: string;
  grupoDescricao: string;
  familiaId: string;
  familiaDescricao: string;
  subfamId: string;
  subfamDescricao: string;
  pesoEsp: number;
  configurado: 'S' | 'N';
}
