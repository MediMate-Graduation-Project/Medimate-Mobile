import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import Modal from 'react-native-modal';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mainColor } from '../common/colors';
import { TouchableOpacity } from 'react-native';

export const NotificationPage = () => {
  const { hasUser,idUser } = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation();

    useEffect(() => {
      if (hasUser === false) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    },[idUser])
  


  console.log(hasUser);

  return (
    <View style={{ flex: 1 }}>
      <Text>Trang thông báo</Text>
      <Modal isVisible={isModalVisible}>
        <View style={styles.containerModal}>
          <View style={{}}>
            <Image style={styles.imageModal} source={require('../assets/login.gif')}></Image>
            <Text style={styles.message}>Vui lòng đăng nhập trước khi dùng tính năng này!</Text>

            <View style={styles.containerButton}>
              <TouchableOpacity onPress={()=>navigation.navigate('Trang chủ')} style={[styles.button, { backgroundColor: '#FB3D56' }]}>
                <Text style={styles.titleButton}>Quay lại trang chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('login')} style={[styles.button, { backgroundColor: mainColor}]}>
                <Text style={styles.titleButton}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width:150,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginBottom:20
  },
  titleButton:{
   color:'white',
   fontWeight:'bold'
  },
  imageModal: {
    width: 300,
    height: 300,
    objectFit: 'contain'
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
  },
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:20
  },
  containerButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    marginTop:20,
  }
})