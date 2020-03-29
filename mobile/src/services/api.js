import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.15.12:19000'
});

export default api;