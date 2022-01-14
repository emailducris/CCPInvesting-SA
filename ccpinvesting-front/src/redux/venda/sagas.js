import * as types from './types'
import * as VendaAPI from '../../services/venda'
import { all, call, put, takeLatest } from '@redux-saga/core/effects'

function* watchVenda(){
    console.log('watch compra')
    yield takeLatest(types.ENVIAR_VENDA, vender)
}

function* vender(action){
    console.log('venda-saga:',action.payload)
    yield call(VendaAPI.enviarVenda, action.payload)
    // yield put({type: types.COMPRA_CONCLUIDA})
}

export default function* vendaSaga(){
    yield all([
        watchVenda(),
    ])
}