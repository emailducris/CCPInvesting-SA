import { ENVIAR_DEPOSITO, ENVIAR_SAQUE } from "../transacao/types"

const INITIAL_STATE = {}

const transacaoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENVIAR_DEPOSITO:
            console.log('reducer deposito',action.payload)
            return{...state, deposito: action.payload }
        
            case ENVIAR_SAQUE:
            console.log('reducer saque')
            return{...state, saque: action.payload}
        
            default: {
            console.log("Saída default compra")
            return state;
        }
    }
}

export default transacaoReducer;