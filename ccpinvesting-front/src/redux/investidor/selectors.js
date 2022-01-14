import { INVESTIDOR_INICIAL } from "../../util/constantes";

export const getInvestidores = state => state.investidor.investidores || [];
export const getInvestidorAtual =  state => state.investidor.investidorAtual || INVESTIDOR_INICIAL;
export const getInvestidor = state => state.investidor.investidor || {};
export const getInvestimentos = state => state.investidor.investidor.investimento || {};
