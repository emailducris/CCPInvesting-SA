import * as types from './types'

export const vender = venda =>  ({ type: types.ENVIAR_VENDA, payload: venda}) 
export const historicoVendas = () =>  {return { type: types.BUSCAR_VENDAS}}