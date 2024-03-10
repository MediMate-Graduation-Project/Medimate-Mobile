import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import appointment from '../api/Appointment.js';
const getSchedule = appointment.getSchedule;
const bookAppointment = appointment.bookAppointment
const queryClient = useQueryClient();
export const useGetSchedule= (id) => {
  return useQuery({
      queryKey: ["SCHEDULE",id],
      queryFn: async () => {
          try {
              const { data } = await getSchedule(id);
              return data;
          } catch (error) {
              console.error("Error:", error);
              throw error;
          }
      },
  });
};

export const useBookAppointment = (setErrorTextCallback) => {
    return useMutation({
      mutationFn: async params => {
          const result = await bookAppointment(params);
          return result;
        },
      onSuccess: async data => {
        console.log(data);
        queryClient.invalidateQueries(["SCHEDULE"]);
      },
      onError: error => {
        console.error('Error:', error);
      },
    });
  };