import * as types from './types'

export const depositar = deposito => ({ type: types.ENVIAR_DEPOSITO, payload: deposito})
export const sacar = saque => ({ type: types.ENVIAR_SAQUE, payload: saque})
