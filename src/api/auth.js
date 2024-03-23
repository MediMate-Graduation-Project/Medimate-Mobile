import baseAxios from './baseAxios.js';

const ENDPOINT = 'auth';

export const login = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/login`, params);
};

export const register = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/register`, params);
};

export const getProfile = async () =>{
  return await baseAxios.get(`${ENDPOINT}/profile`)
}
export default {
  login,
  register
};
