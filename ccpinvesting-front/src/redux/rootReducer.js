import { combineReducers } from "redux";
import acao from "./acao/reducer";
import investidor from "./investidor/reducer";
import login from './login/reducer'
import compra from './compra/reducer'
import venda from './venda/reducer'
import transacao from './transacao/reducer'

export default combineReducers({
    acao: acao,
    investidor: investidor,
    login:login,
    compra:compra,
    venda:venda,
    transacao:transacao

});

