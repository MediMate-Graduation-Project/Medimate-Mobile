import {useNavigation} from '@react-navigation/native';
import {useQueryClient, useMutation, useQuery} from '@tanstack/react-query';
import SweetAlert2 from 'react-sweetalert2';
import auth from '../api/auth.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../components/AuthContext.jsx';
import {useEffect, useState} from 'react';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import {Alert} from 'react-native';
import { page } from '../constants/index.js';
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
      const check = data.status === 200;
      if (check) {
        setHasUser(true);
        navigation.navigate('Trang chủ');
      }
    },
    onError: error => {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        setErrorTextCallback('Số điện thoại hoặc mật khẩu không đúng');
      } else {
        setErrorText('Error:', error);
      }
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
