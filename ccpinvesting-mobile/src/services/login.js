import axios from 'axios'
import {PATH_BACKEND} from './caminho';

const BASE_URL = `${PATH_BACKEND}/seguranca/login`;

export const logar = login => {
    console.log("foi pra api")
    return axios.post(BASE_URL, login)
            .catch(error => {
                throw error;
            })
    
}
