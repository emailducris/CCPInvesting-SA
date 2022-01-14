import axios from './auth'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/venda`;

export const enviarVenda = venda => {
    console.log("Venda Service:",venda)
    return axios.post(BASE_URL, venda)
        .catch(error => {
            throw error;
        })
}