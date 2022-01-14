import { combineReducers } from "redux";
import investidor from "./investidor/reducers.js";
import login from "./login/reducers.js";

export default combineReducers({
    login:login,
    investidor:investidor
});
