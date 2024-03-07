import baseAxios from './baseAxios.js';

const ENDPOINT = 'hospitals';

export const getDetailHospital = async (id) => {
  return await baseAxios.get(`${ENDPOINT}/${id}`);
};
export const getAllHospital = async () => {
  return await baseAxios.get(`${ENDPOINT}`);
};

export default {
  getDetailHospital,
  getAllHospital
};
