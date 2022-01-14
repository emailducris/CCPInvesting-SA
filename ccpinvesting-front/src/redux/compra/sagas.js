import * as types from './types'
import * as CompraAPI from '../../services/compra'
import { all, call, put, takeLatest } from '@redux-saga/core/effects'

function* watchCompra(){
    console.log('watch compra')
    yield takeLatest(types.ENVIAR_COMPRA, compra)
}

function* watchBuscarCompras(){
    console.log('sagas')
    yield takeLatest(types.ENVIAR_COMPRA, buscarCompras)
}

function* compra(action){
    console.log('compra-saga:',action.payload)
    yield call(CompraAPI.compraAcao, action.payload)
    yield put({type: types.COMPRA_CONCLUIDA})
}

function* buscarCompras(){
    yield call(CompraAPI.buscarCompras)
}


export default function* compraSaga(){
    yield all([
        watchCompra(),
        watchBuscarCompras(),
    ])
}