import * as types from './types'
import * as InvestidorAPI from '../../services/investidor';
import {all, call, put, takeLatest, takeEvery} from 'redux-saga/effects';


function* watchBuscarInvestidorPorLogin(){
    yield takeLatest(types.BUSCAR_INVESTIDOR_LOGADO, buscarInvestidorPorLogin)
}

function* buscarInvestidorPorLogin(action){
    yield call(InvestidorAPI.buscarInvestidorPorLogin, action.payload);
}

export default function* investidorSaga(){
    yield all([
        watchBuscarInvestidorPorLogin(),
    ])
}