import { all } from 'redux-saga/effects';
import investidorSaga from './investidor/sagas';
import loginSaga from './login/sagas';

export default function* rootSaga(){
    yield all([
        investidorSaga(),
        loginSaga()
    ])
}