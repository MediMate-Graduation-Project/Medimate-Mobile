import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from '../common/colors';
import SessionStorage from 'react-native-session-storage';
import { ItemProfile } from '../components/ItemProfile';
import { useProfile } from '../hooks/useAuth';

export const ProfilePage = () => {
  const dataUser = useProfile();

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/avatar.png')}></Image>
      <Text style={styles.nameUser}>{dataUser.data.name}</Text>
      <ItemProfile nameService='THÔNG TIN CÁ NHÂN' nameIcon='account-child-circle'></ItemProfile>
      <ItemProfile nameService='THÀNH VIÊN GIA ĐÌNH' nameIcon='account-group'></ItemProfile>

      <ItemProfile nameService='LỊCH SỬ ĐẶT KHÁM' nameIcon='clipboard-text-clock-outline'></ItemProfile>


      <ItemProfile nameService='HỒ SƠ SỨC KHỎE' nameIcon='note-edit-outline'></ItemProfile>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 200, 
    height: 100, 
    borderRadius: 50,
     objectFit: 'contain',
     marginTop:50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  nameUser: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10
  },

})