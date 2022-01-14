import * as types from './types'
import * as TransacaoAPI from '../../services/transacao'
import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { takeEvery } from 'redux-saga/effects'

function* watchEnviarDeposito(){
    yield takeEvery(types.ENVIAR_DEPOSITO, enviarDeposito)
}

function* watchEnviarSaque(){
    yield takeEvery(types.ENVIAR_SAQUE, enviarSaque)
}

function* enviarDeposito(action){
    console.log('sagas deposito',action.payload)
    yield call(TransacaoAPI.depositar, action.payload)
}

function* enviarSaque(action){
    console.log('sagas saque',action.payload)
    yield call(TransacaoAPI.sacar, action.payload)
}

export default function* transacaoSaga(){
    yield all([
        watchEnviarDeposito(),
        watchEnviarSaque(),
    ])
}

