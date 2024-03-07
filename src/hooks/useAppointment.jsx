import { useMutation, useQuery } from '@tanstack/react-query';
import appointment from '../api/Appointment.js';
const getScheduleAPI = appointment.getScheduleAPI;
const bookAppointment = appointment.bookAppointmentAPI

export const useGetSchedule= (id) => {
  return useQuery({
      queryKey: ["SCHEDULE"],
      queryFn: async () => {
          try {
              const { data } = await getScheduleAPI(id);
              return data;
          } catch (error) {
              console.error("Error:", error);
              throw error;
          }
      },
  });
};

export const useBookAppointment = (setErrorTextCallback) => {
    // const navigation = useNavigation();
    const bookAppointment = async params => {
      const result = await bookAppointment(params);
      return result;
    };
    return useMutation({
      mutationFn: bookAppointment,
      onSuccess: async data => {
        console.log(data);
        // const check = data.status === 200;
        // if (check) {
        //   navigation.navigate('Trang chủ');
        // }
      },
      onError: error => {
        console.error('Error:', error);
        // if (error.response && error.response.status === 401) {
        //   setErrorTextCallback('Số điện thoại hoặc mật khẩu không đúng');
        // }
        // else{
        //   setErrorText('Error:', error)
        // }
      },
    });
  };