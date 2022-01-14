import * as types from './types'

export const armazenarInvestidores = investidores => (
    {
        type: types.ARMAZENAR_INVESTIDOR,
        payload: investidores
    }
);

export const setarInvestidorAtual = investidor => (
    {
        type: types.SETAR_INVESTIDOR_ATUAL,
        acaoAtual: investidor 
    }
);

export const buscarInvestidores = () => {return { type: types.BUSCAR_INVESTIDORES}}

export const buscarInvestidorPorId = id => ({ type: types.BUSCAR_INVESTIDOR_POR_ID, payload: id}); 

export const buscarInvestidorPorLogin = login => ({ type: types.BUSCAR_INVESTIDOR_LOGADO, payload: login})

export const excluirInvestidor = id => ({ type: types.EXCLUIR_INVESTIDOR, payload: id});

export const cadastrarInvestidor = investidor =>  ({ type: types.INCLUIR_INVESTIDOR, payload: investidor}) 

export const atualizarInvestidor = investidor => ({ type: types.ATUALIZAR_INVESTIDOR, payload: investidor});