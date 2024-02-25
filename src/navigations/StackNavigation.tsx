import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "./TabNavigation";
import { MyDrawerNavigation } from "./DrawerNavigation";

export const StackNavigaton=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainStack" component={MyDrawerNavigation} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}