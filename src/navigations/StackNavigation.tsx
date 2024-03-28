import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDrawerNavigation} from './DrawerNavigation';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {HospitalDetail} from '../screens/HospitalDetail';
import {Schedule} from '../screens/Schedule';

import Symptom from '../screens/Symptom';
import { WebViewNews } from '../components/WebViewNews';
import Maps from '../screens/Maps';
import { DetailChat } from '../screens/DetailChat';
import { HospitalList } from '../screens/HospitalList';
import { useProfile } from '../hooks/useAuth';
import { ModalCheckAuth } from '../components/ModalCheckAuth';
import { AppointmentDoctor } from '../screens/Doctor/Appointment';
import { HomePage } from '../screens/Home';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {data: userData}= useProfile()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainStack"
        component={MyDrawerNavigation}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="diagnose" component={Symptom} options={{title:''}}></Stack.Screen>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="detail"
        component={HospitalDetail}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="hospitalList"
        component={HospitalList}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="schedule"
        component={userData!= undefined?Schedule:ModalCheckAuth}
        options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
        name="News"
        component={WebViewNews}
        options={{title:''}}></Stack.Screen>
         <Stack.Screen
        name="Maps"
        component={Maps}
        options={{headerShown: false}}></Stack.Screen>
         <Stack.Screen
        name="DetailChat"
        component={DetailChat}
        options={{headerShown: false}}></Stack.Screen>
         <Stack.Screen
        name="doctor"
        component={userData?.role=='HOSPITAL'?AppointmentDoctor:HomePage}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
