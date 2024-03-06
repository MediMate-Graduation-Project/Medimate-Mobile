import baseAxios from './baseAxios.js';

const ENDPOINT = 'auth';

export const loginAPI = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/login`, params);
};

export const registerAPI = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/register`, params);
};

export default {
  loginAPI,
  registerAPI
};
