import { ClienteNaturezaPipe } from './cliente-natureza.pipe';
import { ClienteSituacaoPipes } from './cliente-situacao.pipe';

export * from './cliente-situacao.pipe';
export * from './cliente-natureza.pipe';

export const ClientePipes = [ClienteSituacaoPipes, ClienteNaturezaPipe];
