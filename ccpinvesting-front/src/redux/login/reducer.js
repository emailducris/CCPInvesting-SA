// import { SET_LOADER } from "./actions/ui";

import { ENVIAR_LOGIN, API_SUCCESS, API_ERROR, LOGOUT } from "./types";

const INITIAL_STATE = {
    isAuthUser: !!localStorage.getItem("ccp-investing"),
    loginUsuario: "",
    isLoading: false,
    error: null
}
const LoginReducer = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
      case API_SUCCESS:
        localStorage.getItem("ccp-token"); //TODO recuperar o id do cara
        return { ...state, isAuthUser: true, loginUsuario: action.payload };
  
      case API_ERROR:
        return { ...state, error: action.payload };
  
      case ENVIAR_LOGIN:
        console.log('reducer login',action.payload)
        return { ...state, isLoading: action.payload };
  
      case LOGOUT:
        localStorage.removeItem("ccp-token");
        return { ...state, isAuthUser: false, loginUsuario: "" };
  
      default:
       return state;

  }

};

export default LoginReducer;