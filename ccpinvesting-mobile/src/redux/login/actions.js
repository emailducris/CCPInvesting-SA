import * as types from './types'

export const enviarLogin = login => ({type: types.ENVIAR_LOGIN, payload: login})
export const logout = () => ({ type: types.LOGOUT});