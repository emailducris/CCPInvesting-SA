import * as types from './types'
import * as LoginAPI from '../../services/login';
import {all, call, put, takeEvery} from 'redux-saga/effects';

function* watchLogar(){
    yield takeEvery(types.ENVIAR_LOGIN, logar)
}

function* logar(action){
    const token = yield call(LoginAPI.logar, action.payload);
    yield put({ type: types.API_SUCCESS, payload: action.payload.login})
    // console.log(action.payload.login)
}

export default function* loginSaga(){
    yield all([
        watchLogar(),
    ])
}