import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "./TabNavigation";
import { MyDrawerNavigation } from "./DrawerNavigation";
import VoiceTest from "../screens/Symptom";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { DetailHospital } from "../screens/DetailHospital";
import { ListHospitals } from "../screens/ListHospital";
import { Schedule } from "../screens/Schedule";
// import AppDemo, { VoiceTest2 } from "../screens/Symptom_copy";

export const StackNavigation=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={MyDrawerNavigation} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="voice" component={VoiceTest}></Stack.Screen>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="register" component={Register} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="detail" component={DetailHospital} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="listHospital" component={ListHospitals} options={{headerShown:false}}></Stack.Screen>            
            <Stack.Screen name="schedule" component={Schedule} options={{headerShown:false}}></Stack.Screen>            
        </Stack.Navigator>
    )
}