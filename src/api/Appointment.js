import baseAxios from './baseAxios.js';

const ENDPOINT = 'appointments';

export const getSchedule= async (id) => {
  return await baseAxios.get(`${ENDPOINT}/count/${id}`);
};

export const bookAppointment = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/book`, params);
};

export const getActualNumber = async (id) =>{
  return await baseAxios.get(`${ENDPOINT}/actual-ordernumber/${id}`)
}

export const confirmSchedule = async (id) =>{
  return await baseAxios.patch(`${ENDPOINT}/${id}`)
}

export const cancelAppointment = async(id) => {
  return await baseAxios.delete(`${ENDPOINT}/${id}`)
}

export const nextNumber = async (id) => {
  return await baseAxios.delete(`${ENDPOINT}/doctor/${id}`)
}

export default {
  getSchedule,
  bookAppointment,
  getActualNumber,
  confirmSchedule,
  cancelAppointment,
  nextNumber
};
