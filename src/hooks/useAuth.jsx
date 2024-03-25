import {CommonActions, useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@tanstack/react-query';
import auth, { getProfile } from '../api/auth.js';
import {useAuth} from '../components/AuthContext.jsx';
import {Alert} from 'react-native';
import { page, queryKey } from '../constants/index.js';
import SessionStorage from 'react-native-session-storage';
const login = auth.login;
const register = auth.register;

export const useLogin = setErrorTextCallback => {
  const navigation = useNavigation();
  const {setHasUser} = useAuth();
  return useMutation({
    mutationFn: async params => {
      const result = await login(params);
      return result;
    },
    onSuccess: async data => {
      console.log('login',data.data);
      const check = data.status === 200;
      if (check) {
        // console.log(89,userData);
        // SessionStorage.setItem('UserData','HaveUser');
        Alert.alert('Đăng nhập thành công');
        // const dataUser= SessionStorage.getItem('UserData');
        // console.log(80,dataUser);
      //   navigation.dispatch(
      //     CommonActions.reset({
      //         index: 1,
      //         routes: [{ name: 'Trang chủ' }]
      //     })
      // );
      navigation.navigate('Trang chủ');
      }
    },
    onError: error => {
      console.log(78,  error.response.data.message);
      setErrorTextCallback(error.response.data.message);
      // if (error.response && error.response.status === 401) {
      //   setErrorTextCallback('Số điện thoại hoặc mật khẩu không đúng');
      // } else {
      //   setErrorText('Error:', error);
      // }
    },
  });
};
export const useRegister = setErrorTextCallback => {
  const navigation = useNavigation();

  return useMutation({
    mutationFn: async params => {
      const result = await register(params);
      return result;
    },
    onSuccess: async data => {
      const check = data.status === 201;
      if (check) {
        Alert.alert('Đăng ký thành công')
        navigation.dispatch(
          CommonActions.reset({
              index: 1,
              routes: [{ name: 'Trang chủ' }]
          })
      );
        navigation.navigate(page.login);
      }
    },
    onError: error => {
      console.error('Error:', error);
      if (error.response && error.response.status === 409) {
        setErrorTextCallback('Tài khoản đã tồn tại');
      } else {
        setErrorText('Error:', error);
      }
    },
  });
};

export const useProfile = () =>{
  return useQuery({
    queryKey:[queryKey.profile],
    queryFn: async () =>{
        const response = await getProfile();
        return response.data;
    },
  })
}
