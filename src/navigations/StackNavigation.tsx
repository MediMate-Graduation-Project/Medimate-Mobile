import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "./TabNavigation";
import { MyDrawerNavigation } from "./DrawerNavigation";
import VoiceTest from "../screens/Symptom";
import AppDemo, { VoiceTest2 } from "../screens/Symptom_copy";

export const StackNavigaton=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={MyDrawerNavigation} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="voice" component={VoiceTest}></Stack.Screen>
        </Stack.Navigator>
    )
}