import baseAxios from './baseAxios.js';

const ENDPOINT = 'auth';

export const loginAPI = async (params = {}) => {
  return await baseAxios.post(`${ENDPOINT}/login`, params);
};

export default {
  loginAPI,
};
