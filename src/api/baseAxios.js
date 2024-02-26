import axios from 'axios';
const BASE_URL = 'https://medimate-be-1.onrender.com/';

const baseAxios = axios.create({
    baseURL: BASE_URL, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default baseAxios;