import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomePage } from '../screens/Home';
import { ChatPage } from '../screens/Chat';
import { AppointmentPage } from '../screens/Appointment';
import { NotificationPage } from '../screens/Notification';
import { ProfilePage } from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import login from '../screens/login';
import Card from '../components/card';
import { Register } from '../screens/Register';
const Tab = createBottomTabNavigator();
export function TabNavigation(){
   return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tin nhắn') {
            iconName = focused ? 'chat-processing' : 'chat-processing-outline';
          }else if (route.name === 'Lịch hẹn') {
            iconName = focused ? 'calendar-clock' : 'calendar-clock-outline';
          }else if (route.name === 'Thông báo') {
            iconName = focused ? 'bell' : 'bell-outline';
          }else if (route.name === 'Cá nhân') {
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
      <Tab.Screen name="Trang chủ" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Tin nhắn" component={ChatPage}></Tab.Screen>
      <Tab.Screen name="Lịch hẹn" component={AppointmentPage}></Tab.Screen>
      <Tab.Screen name="Thông báo" component={NotificationPage}></Tab.Screen>
      <Tab.Screen name="Cá nhân" component={ProfilePage}></Tab.Screen>
      <Tab.Screen name="Login" component={login}></Tab.Screen>
      <Tab.Screen name="Register" component={Register}></Tab.Screen>
      <Tab.Screen name="Card" component={Card}></Tab.Screen>
    </Tab.Navigator>
   )
}