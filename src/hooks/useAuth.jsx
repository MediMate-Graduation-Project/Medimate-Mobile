import {useNavigation} from '@react-navigation/native';
import {useQueryClient, useMutation} from '@tanstack/react-query';
import SweetAlert2 from 'react-sweetalert2';
import auth, { registerAPI } from '../api/auth.js';
const loginAPI = auth.loginAPI;

export const useLogin = (setErrorTextCallback) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const login = async params => {
    const result = await loginAPI(params);
    return result;
  };
  return useMutation({
    mutationFn: login,
    onSuccess: async data => {
      const check = data.status === 200;
      if (check) {
        navigation.navigate('Trang chủ');
      }
    },
    onError: error => {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        setErrorTextCallback('Số điện thoại hoặc mật khẩu không đúng');
      }
      else{
        setErrorText('Error:', error)
      }
    },
  });
};
export const useRegister = (setErrorTextCallback) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const register = async params => {
    const result = await registerAPI(params);
    return result;
  };
  return useMutation({
    mutationFn: register,
    onSuccess: async data => {
      const check = data.status === 201;
      if (check) {
        navigation.navigate('login');
      }
    },
    onError: error => {
      console.error('Error:', error);
      if (error.response && error.response.status === 409) {
        setErrorTextCallback('Tài khoản đã tồn tại');
      }
      else{
        setErrorText('Error:', error)
      }
    },
  });
};
