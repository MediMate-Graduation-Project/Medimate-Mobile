import axios from 'axios';
const BASE_URL = 'https://medimate-be.onrender.com/';

let baseAxios = axios.create({
    baseURL: BASE_URL, 
    headers: {
        'Content-Type': 'application/json',
        
    },
    withCredentials: true,
});

export default baseAxios;