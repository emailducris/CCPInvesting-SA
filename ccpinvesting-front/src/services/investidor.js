import axios from 'axios'
import {PATH_BACKEND} from './caminhos';

const BASE_URL = `${PATH_BACKEND}/investidor`;

export const buscarInvestidores = () => {
    return axios.get(BASE_URL)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const buscarInvestidorPorId = id => {
    return axios.get(`${BASE_URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const buscarInvestidorPorLogin = login => {
    console.log("chamou api buscar-usuario")
    return axios.get(`${BASE_URL}/buscar-usuario/${login}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const cadastrarInvestidor = investidor => {
return axios.post(`${BASE_URL}/cadastrar`, investidor)
        .catch(error => {
            throw error;
        })
}

export const atualizarInvestidor = investidor => {
    return axios.put(BASE_URL, investidor)
        .catch(error =>{
            throw error;
        })
}

export const excluirInvestidor = id => {
    return axios.get(`${BASE_URL}/${id}`)
        .catch(error =>{
            throw error;
        })
}
