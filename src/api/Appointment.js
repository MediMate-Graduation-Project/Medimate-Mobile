import baseAxios from './baseAxios.js';

const ENDPOINT = 'appointments';

export const getScheduleAPI = async (id) => {
  return await baseAxios.get(`${ENDPOINT}/count/${id}`);
};

export const bookAppointmentAPI = async (params) => {
  return await baseAxios.post(`${ENDPOINT}/book`, params);
};

export default {
  getScheduleAPI,
  bookAppointmentAPI
};
