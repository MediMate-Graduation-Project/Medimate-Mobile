import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomePage } from '../screens/Home';
import { ChatPage } from '../screens/Chat';
import { AppointmentPage } from '../screens/Appointment';
import { NotificationPage } from '../screens/Notification';
import { ProfilePage } from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
export function TabNavigation(){
   return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chat-processing' : 'chat-processing-outline';
          }else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar-clock' : 'calendar-clock-outline';
          }else if (route.name === 'Notification') {
            iconName = focused ? 'bell' : 'bell-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }
          
          return <MaterialCommunityIcons name={iconName} size={size} color={color} ></MaterialCommunityIcons>;
        },
        tabBarActiveTintColor: '#30A2FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#353B51',
        },
        headerShown:false
      })}>
      <Tab.Screen name="Home" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Chat" component={ChatPage}></Tab.Screen>
      <Tab.Screen name="Appointment" component={AppointmentPage}></Tab.Screen>
      <Tab.Screen name="Notification" component={NotificationPage}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfilePage}></Tab.Screen>
    </Tab.Navigator>
   )
}