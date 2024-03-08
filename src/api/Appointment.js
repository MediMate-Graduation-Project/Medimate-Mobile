import baseAxios from './baseAxios.js';

const ENDPOINT = 'appointments';

export const getSchedule= async (id) => {
  return await baseAxios.get(`${ENDPOINT}/count/${id}`);
};

export const bookAppointment = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/book`, params);
};

export default {
  getSchedule,
  bookAppointment
};
