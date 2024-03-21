import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from '../common/colors';
import SessionStorage from 'react-native-session-storage';
import { ItemProfile } from '../components/ItemProfile';

export const ProfilePage = () => {
  const dataUser = SessionStorage.getItem('UserData');
  const nameUser = dataUser.name;
  return (
    <View style={styles.container}>
      <Image style={{ width: 200, height: 100, borderRadius: 50, objectFit: 'contain' }} source={require('../assets/avatar.png')}></Image>
      <Text style={styles.nameUser}>{nameUser}</Text>
      <ItemProfile nameService='THÔNG TIN CÁ NHÂN' nameIcon='account-child-circle'></ItemProfile>
      <ItemProfile nameService='THÀNH VIÊN GIA ĐÌNH' nameIcon='account-group'></ItemProfile>
     
      <ItemProfile nameService='LỊCH SỬ ĐẶT KHÁM' nameIcon='clipboard-text-clock-outline'></ItemProfile>
    

      <ItemProfile nameService='HỒ SƠ SỨC KHỎE' nameIcon='note-edit-outline'></ItemProfile>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  nameUser: {
    fontWeight: 'bold',
    color: 'black',
  },

})