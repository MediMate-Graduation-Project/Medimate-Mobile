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
import {ItemDrawer} from '../components/itemDrawer';
import {useNavigation} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerHeaderDrawer}>
        <Image source={require('../assets/logo.png')}></Image>
        <View style={styles.contanierUser}>
          <MaterialCommunityIcons
            name="account-circle"
            color={mainColor}
            size={30}></MaterialCommunityIcons>
          <Text style={styles.nameUser}>Nguyen Van Bien</Text>
        </View>
        <TouchableOpacity>
          <Text>Xem trang cá nhân</Text>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <View style={styles.containerLogout}>
          <MaterialCommunityIcons
            name="logout"
            color={'#30A2FF'}
            size={20}></MaterialCommunityIcons>
          <Text style={styles.nameFeature}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
export const MyDrawerNavigation = () => {
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
      }}>
      <Drawer.Screen
        name="myTab"
        component={TabNavigation}
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
        name="guideUse"
        component={HomePage}
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
    marginTop: 40,
  },
  image: {
    marginBottom: 10,
  },
  nameApp: {
    color: '#30A2FF',
    fontWeight: 'bold',
    fontSize: 25,
  },

  containerLogout: {
    flexDirection: 'row',
    marginLeft: 20,
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
