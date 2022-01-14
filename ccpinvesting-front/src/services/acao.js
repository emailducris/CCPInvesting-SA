import axios from './auth'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/acao`;

export const buscarAcoes = () => {
    return axios.get(BASE_URL)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const buscarAcaoPorId = id => {
    return axios.get(`${BASE_URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const incluirAcao = acao => {
    return axios.post(BASE_URL, acao)
        .catch(error => {
            throw error;
        })
}

export const atualizarAcao = acao => {
    return axios.put(BASE_URL, acao)
        .catch(error =>{
            throw error;
        })
}

export const excluirAcao = id => {
    return axios.get(`${BASE_URL}/${id}`)
        .catch(error =>{
            throw error;
        })
}



