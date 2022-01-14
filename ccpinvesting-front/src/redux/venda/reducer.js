import { ENVIAR_VENDA} from "../venda/types"

const INITIAL_STATE = {}

const VendaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ENVIAR_VENDA:
            console.log('reducer venda',action.payload)
            return{...state, venda: action.payload }

        default: {
            console.log("Saída default venda")
            return state;
        }
    }
}
export default VendaReducer;