import * as types from './types'

export const comprar = compra =>  ({ type: types.ENVIAR_COMPRA, payload: compra}) 
export const buscarCompras = () =>  {return { type: types.BUSCAR_COMPRAS}}