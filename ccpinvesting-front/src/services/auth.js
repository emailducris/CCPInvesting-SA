import axios from 'axios';

const requerAuth = (config) => {
    if(config.url.includes('usuario') && config.method === 'POST'){
        return true;
    }

    if(config.url.includes('acao') && config.methor === 'POST'){
        return true;
    }

    if(!config.url.includes('login')){
        return true;
    }

    return false;

} 

axios.interceptors.request.use((config) =>{
    const token = localStorage.getItem('ccp-token')

    if(requerAuth(config) && token) 
    {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

export default axios;