import axios from './auth'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/transacao`;

export const depositar = deposito => {
    return axios.post(`${BASE_URL}/depositar`, deposito)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const sacar = saque => {
    return axios.post(`${BASE_URL}/sacar`, saque)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}
