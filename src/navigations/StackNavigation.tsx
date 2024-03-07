import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MyDrawerNavigation } from "./DrawerNavigation";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Schedule } from "../screens/Schedule";
import { DetailHospital } from "../screens/DetailHospital";
// import AppDemo, { VoiceTest2 } from "../screens/Symptom_copy";

import Symptom from "../screens/Symptom";



export const StackNavigation=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={MyDrawerNavigation} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="voice" component={Symptom}></Stack.Screen>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="register" component={Register} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="schedule" component={Schedule}options={{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="detail" component={DetailHospital} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}