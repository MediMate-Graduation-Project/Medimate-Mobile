import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDrawerNavigation} from './DrawerNavigation';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {HospitalDetail} from '../screens/HospitalDetail';
import {HospitalList} from '../screens/HospitalList ';
import {Schedule} from '../screens/Schedule';
// import AppDemo, { VoiceTest2 } from "../screens/Symptom_copy";

import Symptom from '../screens/Symptom';
import Maps from '../screens/Maps';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
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
        component={Schedule}
        options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
        name="maps"
        component={Maps}
        options={{title:''}}></Stack.Screen>
    </Stack.Navigator>
  );
};
