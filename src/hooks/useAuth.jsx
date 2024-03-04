import {useNavigation} from '@react-navigation/native';
import {useQueryClient, useMutation, useQuery} from '@tanstack/react-query';
import SweetAlert2 from 'react-sweetalert2';
import auth, { registerAPI } from '../api/auth.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../components/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { Alert } from 'react-native';
const loginAPI = auth.loginAPI;

export const useLogin = (setErrorTextCallback) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const login = async params => {
    const result = await loginAPI(params);
    return result;
  };
  const{setHasUser}=useAuth();
  return useMutation({
    mutationFn: login,
    onSuccess: async data => {
      const check = data.status === 200;
      if (check) {
        setHasUser(true)
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


export const useGetDataUser=(idUser)=>{
  
  const [dataUser, setDataUser] = useState();
  // useEffect(() => {
  //   const getData = async () => {
  //    if(hasUser==true){
  //       try {
  //         const jsonValue = await AsyncStorage.getItem('user');
  //         setDataUser(JSON.parse(jsonValue).id);
  //       } catch (error) {
  //         console.error('Error reading user data:', error);
  //       }
      

  //   }};

  //   getData();
  // }, [hasUser]);
  // console.log('id',dataUser);
  console.log('myid',idUser);
  const{data:userData}=useQuery({
    queryKey:['User'],
    queryFn: async () => {
      try {
      
        const response = await axios.get(`https://medimate-be.onrender.com/users/${16}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch user data');
      }
    }})

  return{userData,dataUser}
}