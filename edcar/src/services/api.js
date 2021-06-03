import axios from 'axios';

//cria uma conexão com a api
const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export default api;