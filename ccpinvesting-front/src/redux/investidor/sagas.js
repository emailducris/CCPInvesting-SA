import * as types from './types'
import * as InvestidorAPI from '../../services/investidor';
import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';

function* watchBuscarInvestidores(){
    yield takeLatest(types.BUSCAR_INVESTIDORES, buscarInvestidores)
}

function* watchBuscarInvestidorPorId(){
    yield takeLatest(types.BUSCAR_INVESTIDOR_POR_ID, buscarInvestidorPorId)
}

function* watchBuscarInvestidorPorLogin(){
    yield takeLatest(types.BUSCAR_INVESTIDOR_LOGADO, buscarInvestidorPorLogin)
}

function* watchExcluirInvestidor(){
    yield takeEvery(types.EXCLUIR_INVESTIDOR, excluirInvestidor)
}

function* watchAtualizarInvestidor(){
    yield takeEvery(types.ATUALIZAR_INVESTIDOR, atualizarInvestidor);
}

function* watchIncluirInvestidor(){
    yield takeEvery(types.INCLUIR_INVESTIDOR, incluirInvestidor)
}

function* buscarInvestidores(action){
    console.log("entrou no worker", action)
    const investidores = yield call(InvestidorAPI.buscarInvestidores);
    yield put({ type: types.ARMAZENAR_INVESTIDOR, payload: investidores})
}

function* buscarInvestidorPorId(){
    const investidor = yield call(InvestidorAPI.buscarInvestidorPorId);
    yield put({ type: types.SETAR_INVESTIDOR_ATUAL, investidorAtual: investidor})
}

function* buscarInvestidorPorLogin(action){
    const investidor = yield call(InvestidorAPI.buscarInvestidorPorLogin, action.payload);
    console.log("buscarInvestidorPorLogin",investidor)
    yield put({ type: types.INVESTIDOR_LOCALIZADO, investidor: investidor})
}

function* incluirInvestidor(action){
    console.log('sagas incluir investidor', action.payload)
    yield call(InvestidorAPI.cadastrarInvestidor, action.payload);
}

function* excluirInvestidor(action){
    console.log("Excluir filme worker", action)
    yield call(InvestidorAPI.excluirInvestidor, action.payload)
    yield put({ type: types.BUSCAR_INVESTIDORES})
}

function* atualizarInvestidor(action){
    yield call(InvestidorAPI.atualizarInvestidor, action.payload)
    yield put({ type: types.ATUALIZAR_INVESTIDOR})
}

export default function* investidorSaga(){
    yield all([
        watchBuscarInvestidores(),
        watchBuscarInvestidorPorId(),
        watchBuscarInvestidorPorLogin(),
        watchExcluirInvestidor(),
        watchAtualizarInvestidor(),
        watchIncluirInvestidor()
    ])
}