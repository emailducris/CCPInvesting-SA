import { BUSCAR_INVESTIDOR_LOGADO } from "../investidor/types"

const INITIAL_STATE = {}

const InvestidorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUSCAR_INVESTIDOR_LOGADO:
            return{...state, usuario: action.payload.usuario}
            
        default: {
                console.log("Saída default")
                return state;
            }
        
    }
}

export default InvestidorReducer;