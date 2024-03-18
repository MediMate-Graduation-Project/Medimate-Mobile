import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import Modal from 'react-native-modal';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mainColor } from '../common/colors';
import { TouchableOpacity } from 'react-native';
import { page } from '../constants';

export const ChatPage = () => {
  const { hasUser} = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation();
  useFocusEffect(
    useCallback(() => {
      if (hasUser === false) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    }, [hasUser])
  )


  console.log(hasUser);

  return (
    <View style={{ flex: 1 }}>
      <Text>Trang Chat</Text>
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