import axios from 'axios';

const api = axios.create({
    baseURL: 'https://organizei-back-end-homologacao.herokuapp.com',
    headers: {'Content-Type': 'application/json; charset=utf-8'}
});

// api.defaults.headers.common['Content-Type'] = 'application/json';
// api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default api;