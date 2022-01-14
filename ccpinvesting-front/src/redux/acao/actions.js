import * as types from './types'

export const armazenarAcoes = acoes => (
    {
        type: types.ARMAZENAR_ACAO,
        payload: acoes
    }
);

export const setarAcaoAtual = acao => (
    {
        type: types.SETAR_ACAO_ATUAL,
        acaoAtual: acao 
    }
);

export const buscarAcoes = () => {return { type: types.BUSCAR_ACOES}}

export const buscarAcao = id => ({ type: types.BUSCAR_ACAO_POR_ID, payload: id}); 

export const excluirAcao = id => ({ type: types.EXCLUIR_ACAO, payload: id});

export const incluirAcao = acao =>  ({ type: types.INCLUIR_ACAO, payload: acao}) 

export const atualizarAcao = acao => ({ type: types.ATUALIZAR_ACAO, payload: acao});


