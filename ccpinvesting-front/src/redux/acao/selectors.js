import { ACAO_INICIAL } from "../../util/constantes";

export const getAcoes = state => state.acao.acoes || [];
export const getAcaoAtual =  state => state.acao.acaoAtual || ACAO_INICIAL;