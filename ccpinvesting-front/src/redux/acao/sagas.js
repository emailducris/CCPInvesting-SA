import * as types from './types'
import * as AcaoAPI from '../../services/acao';
import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';

function* watchBuscarAcoes(){
    yield takeLatest(types.BUSCAR_ACOES, buscarAcoes)
}

function* watchBuscarAcaoPorId(){
    yield takeLatest(types.BUSCAR_ACAO_POR_ID, buscarAcaoPorId)
}

function* watchExcluirAcao(){
    yield takeEvery(types.EXCLUIR_ACAO, excluirAcao)
}

function* watchAtualizarAcao(){
    yield takeEvery(types.ATUALIZAR_ACAO, atualizarAcao);
}

function* watchIncluirAcao(){
    yield takeEvery(types.INCLUIR_ACAO, incluirAcao)
}

function* buscarAcoes(action){
    console.log("entrou no worker", action)
    const acoes = yield call(AcaoAPI.buscarAcoes);
    yield put({ type: types.ARMAZENAR_ACAO, payload: acoes})
}

function* buscarAcaoPorId(){
    const acao = yield call(AcaoAPI.buscarAcaoPorId);
    yield put({ type: types.SETAR_ACAO_ATUAL, acaoAtual: acao})
}

function* incluirAcao(action){
    yield call(AcaoAPI.incluirAcao, action.payload);
}

function* excluirAcao(action){
    console.log("Excluir filme worker", action)
    yield call(AcaoAPI.excluirAcao, action.payload)
    yield put({ type: types.BUSCAR_ACOES})
}

function* atualizarAcao(action){
    yield call(AcaoAPI.atualizarAcao, action.payload)
    yield put({ type: types.ATUALIZAR_ACAO})
}

export default function* acaoSaga(){
    yield all([
        watchBuscarAcoes(),
        watchExcluirAcao(),
        watchBuscarAcaoPorId(),
        watchAtualizarAcao(),
        watchIncluirAcao()
    ])
}