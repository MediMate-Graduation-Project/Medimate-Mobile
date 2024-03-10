import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "./TabNavigation";
import { MyDrawerNavigation } from "./DrawerNavigation";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import Diagnose from "../screens/Symptom";
// import AppDemo, { VoiceTest2 } from "../screens/Symptom_copy";

export const StackNavigation=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={MyDrawerNavigation} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="diagnose" component={Diagnose}></Stack.Screen>
            <Stack.Screen name="login" component={Login} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="register" component={Register} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}