import baseAxios from './baseAxios.js';

const ENDPOINT = 'hospitals';

export const getHospitalDetail = async (id) => {
  return await baseAxios.get(`${ENDPOINT}/${id}`);
};
export const getAllHospital = async () => {
  return await baseAxios.get(`${ENDPOINT}`);
};

export const getActualNumber = async (id) =>{
  return await baseAxios.get(`${ENDPOINT}/${id}/actual-ordernumber`)
}

export default {
  getHospitalDetail,
  getAllHospital,
  getActualNumber,
};
