import { all } from 'redux-saga/effects';
import acaoSaga from './acao/sagas';
import compraSaga from './compra/sagas';
import investidorSaga from './investidor/sagas';
import loginSaga from './login/sagas';
import transacaoSaga from './transacao/sagas';
import vendaSaga from './venda/sagas';

export default function* rootSaga(){
    yield all([
        acaoSaga(),
        investidorSaga(),
        loginSaga(),
        compraSaga(),
        vendaSaga(),
        transacaoSaga()
    ])
}