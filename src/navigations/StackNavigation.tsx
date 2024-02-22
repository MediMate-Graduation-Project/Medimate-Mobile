import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "./TabNavigation";

export const StackNavigation=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={TabNavigation} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}