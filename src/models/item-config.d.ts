interface Configuracao {
  configId: string;
  mascara: string;
  campos: ConfigCampos;
  questionario: ConfigQuest[];
}

type ConfigCampos = {
  [k: string]: string;
};

interface ConfigQuest {
  pergunta: Pergunta;
  resposta: string;
}

interface Pergunta {
  id: number;
  codigo: string;
  descricao: string;
}
