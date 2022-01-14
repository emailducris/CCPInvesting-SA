import axios from './auth'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/compraAcao`;

export const compraAcao = compra => {
    return axios.post(BASE_URL, compra)
        .catch(error => {
            throw error;
        })
}

export const buscarCompras = id => {
    return axios.get(BASE_URL)
        .catch(error => {
            throw error;
        })
}