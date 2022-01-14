import { ENVIAR_COMPRA, ARMAZENAR_COMPRAS, COMPRA_CONCLUIDA } from "../compra/types"

const INITIAL_STATE = {}

const CompraReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENVIAR_COMPRA:
            console.log('reducer',action.payload)
            return{...state, compra: action.payload }
        case COMPRA_CONCLUIDA:
            console.log('compra concluída')
            return{...state, isSuccess: true}

        case ARMAZENAR_COMPRAS:
            return armazenarCompras(state, action);
            
        default: {
            console.log("Saída default compra")
            return state;
        }
    }
}

const armazenarCompras = (state, action) => {
    console.log("state >>>",state,"action >>>", action)
    return { ...state, compras: action.payload }
   
}

export default CompraReducer;