import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomePage} from '../screens/Home';
import {TabNavigation} from './TabNavigation';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {mainColor} from '../common/colors';
import {ItemDrawer} from '../components/ItemDrawer';
import { useNavigation} from '@react-navigation/native';

import {useCheckAuth} from '../hooks/checkAuth';
import {page} from '../constants';
import {AppointmentDoctor} from '../screens/Doctor/Appointment';
import {useProfile} from '../hooks/useAuth';
const Drawer = createDrawerNavigator();
const CustomDrawer = (props: any) => {
  const navigation = useNavigation();

  const {handleLogout} = useCheckAuth();

  const {data: userData} = useProfile();


  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerHeaderDrawer}>
        <Image source={require('../assets/logo.png')}></Image>
        {userData != undefined ? (
          <>
            <View style={styles.contanierUser}>
              <MaterialCommunityIcons
                name="account-circle"
                color={mainColor}
                size={30}></MaterialCommunityIcons>
              <Text style={styles.nameUser}>
                {userData ? userData.name : null}
              </Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Cá nhân')}}>
              <Text>Xem trang cá nhân</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>

      <DrawerItemList {...props} />
      {userData != undefined ? (
        <TouchableOpacity
          onPress={() => {
            handleLogout();
          }}>
          <View style={styles.containerLogout}>
            <MaterialCommunityIcons
              name="logout"
              color={'#30A2FF'}
              size={20}></MaterialCommunityIcons>
            <Text style={styles.nameFeature}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(page.login);
          }}>
          <View style={styles.containerLogout}>
            <MaterialCommunityIcons
              name="login"
              color={'#30A2FF'}
              size={20}></MaterialCommunityIcons>
            <Text style={styles.nameFeature}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      )}
    </DrawerContentScrollView>
  );
};
export const MyDrawerNavigation = () => {
  const {data: userData} = useProfile();

  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: () => (
          <View style={styles.containerLogo}>
            <Image
              style={styles.image}
              source={require('../assets/logo.png')}></Image>
            <Text style={styles.nameApp}>MediMate</Text>
          </View>
        ),
        headerStyle: {height: 100},
        drawerItemStyle: {marginBottom: 10},
      }}>
      <Drawer.Screen
        name="myTab"
        component={ TabNavigation }
        options={{
          drawerLabel: () => (
            <ItemDrawer nameIcon="home" nameFeature="Trang chủ" />
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="setting"
        component={HomePage}
        options={{
          drawerLabel: () => (
            <ItemDrawer nameIcon="cog" nameFeature="Cài đặt" />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="help"
        component={HomePage}
        options={{
          drawerLabel: () => (
            <ItemDrawer nameIcon="help-circle-outline" nameFeature="Trợ giúp" />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="security"
        component={HomePage}
        options={{
          drawerLabel: () => (
            <ItemDrawer nameIcon="security" nameFeature="Chính sách bảo mật" />
          ),
        }}></Drawer.Screen>

      <Drawer.Screen
        name="doctor"
        component={userData?.role == 'HOSPITAL' ? AppointmentDoctor : HomePage}
        options={{
          drawerLabel: () => (
            <ItemDrawer
              nameIcon="head-question-outline"
              nameFeature="Hướng dẫn đặt khám"
            />
          ),
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  image: {
    width: 80,
    height: 80,
  },
  nameApp: {
    color: '#30A2FF',
    fontWeight: 'bold',
    fontSize: 22,
  },

  containerLogout: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 20,
    marginTop: 10,
  },

  containerHeaderDrawer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contanierUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameUser: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  nameFeature: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
