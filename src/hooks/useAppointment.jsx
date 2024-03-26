import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import appointment, {
  cancelAppointment,
  confirmSchedule,
  nextNumber,
  userNumber,
} from '../api/Appointment.js';
import {page, queryKey} from '../constants/index.js';
import { getActualNumber } from '../api/Hospital.js';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const getSchedule = appointment.getSchedule;
const bookAppointment = appointment.bookAppointment;
const queryClient = useQueryClient();

export const useGetSchedule = id => {
  return useQuery({
    queryKey: [queryKey.schedule, id],
    queryFn: async () => {
      try {
        const {data} = await getSchedule(id);
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
  });
};

export const useConfirmSchedule = id => {
  const navigation = useNavigation()
  return useMutation({
    mutationFn:   confirm = async  (id) => {
      const result = await confirmSchedule(id);
      return result;
    },
    onSuccess: async data => {
      queryClient.invalidateQueries([queryKey.schedule]);
      return data;
    },
    onError: error => {
      console.log(error.response.data.message);
      console.error('Error:', error);
    },
  });
};

export const useBookAppointment = setErrorTextCallback => {
  return useMutation({
    mutationFn: (SelectDate = async params => {
      const result = await bookAppointment(params);
      return result;
    }),
    onSuccess: async appointmentData => {
      console.log(appointmentData.data, 90);
      queryClient.invalidateQueries([page.schedule]);
      return appointmentData.data;
    },
    onError: error => {
      Alert.alert(error.response.data.message)
    },
  });
};

export const useActualNumber = id => {
  return useQuery({
    queryKey: [queryKey.number],
    queryFn: async () => {
      try {
        const {data} = await getActualNumber(id);
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    refetchInterval: 5000,
  });
};

export const useNextNumber = id => {
  return useMutation({
    mutationKey: ['nextNumber'],
    mutationFn:   async  id => {
      const result = await nextNumber(id);
      return result;
    },
    onSuccess: async data => {
      console.log(data, 34);
      queryClient.invalidateQueries([page.number]);
      return data;
    },
    onError: error => {
      console.error('Error:', error);
    },
  });
};

export const useUserNumber = (id) => {
  return useQuery({
    queryKey: [queryKey.userNumber],
    queryFn: async () => {
      try {
        const response = await userNumber(id);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
  });
}

export const useCancel = () => {
  const navigation = useNavigation()
  return useMutation({
    mutationFn:   cancel = async  (id) => {
      const result = await cancelAppointment(id);
      return result;
    },
    onSuccess: async data => {
      Alert.alert('Hủy lịch thành công')
      navigation.navigate('Trang chủ')
      queryClient.invalidateQueries([queryKey.number, queryKey.userNumber]);
      return data;
    },
    onError: error => {
      console.error('Error:', error);
    },
  });
};
export const useCancelSchedule = () => {
  return useMutation({
    mutationFn:   cancel = async  (id) => {
      const result = await cancelAppointment(id);
      return result;
    },
    onSuccess: async data => {
      queryClient.invalidateQueries([queryKey.schedule]);
      return data;
    },
    onError: error => {
      console.error('Error:', error);
    },
  });
};