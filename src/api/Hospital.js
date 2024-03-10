import baseAxios from './baseAxios.js';

const ENDPOINT = 'hospitals';

export const getHospitalDetail = async (id) => {
  return await baseAxios.get(`${ENDPOINT}/${id}`);
};
export const getAllHospital = async () => {
  return await baseAxios.get(`${ENDPOINT}`);
};

export default {
  getHospitalDetail,
  getAllHospital
};
