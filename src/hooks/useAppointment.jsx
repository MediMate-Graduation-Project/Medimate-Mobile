import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import appointment from '../api/Appointment.js';
const getScheduleAPI = appointment.getScheduleAPI;
const bookAppointmentAPI = appointment.bookAppointmentAPI
const queryClient = useQueryClient();

export const useGetSchedule= (id) => {
  return useQuery({
      queryKey: ["SCHEDULE", id],
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
      const result = await bookAppointmentAPI(params);
      return result;
    };
    return useMutation({
      mutationFn: bookAppointment,
      onSuccess: async data => {
        console.log(data.data);
        queryClient.invalidateQueries(["SCHEDULE"]);
      },
      onError: error => {
        console.error('Error:', error);
      },
    });
  };