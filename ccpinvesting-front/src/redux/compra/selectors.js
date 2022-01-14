import { COMPRA_INICIAL } from "../../util/constantes";

export const getCompras = state => state.compra.compras || {}
export const setCompra = state => state.compra.compra || COMPRA_INICIAL 
export const isSuccess = state => state.compra.isSuccess || false;