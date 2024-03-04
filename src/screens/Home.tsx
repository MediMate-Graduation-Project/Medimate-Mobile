import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RenderHospital } from '../components/HomePage/RenderHospital';
import { RenderHeaderFlatlist } from '../components/HomePage/RenderHeaderFlastlist';
import { RenderNews } from '../components/HomePage/RenderNews';
import { stylesHome } from '../styles/Home';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../components/AuthContext';
import { useCheckAuth } from '../hooks/checkAuth';
export const HomePage = () => {
  const dataNews = [
    {
      id: 1,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_30/doi-dac-nhiem-1-5946.jpg.webp',
      namenews: 'Đà Nẵng: Nhiều trường hợp đa chấn thương do pháo nổ nhập viện cấp cứu'
    },
    {
      id: 2,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_11/bn-t-5333.jpg.webp',
      namenews: 'Cứu sống bệnh nhân bị đứt lìa phế quản gốc của phổi trái'
    },
    {
      id: 3,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_12_07/u1-9459.jpg.webp',
      namenews: 'Nhiều khoa xét nghiệm của Bệnh viện Đà Nẵng đạt chuẩn ISO 15189:2012'
    },
    {
      id: 4,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_11_03/1a-1094.jpg.webp',
      namenews: 'Vụ nổ tại nhà máy đóng tàu Dung Quất: 3 bệnh nhân nguy kịch'
    }
  ]
  const storeData = async (value:any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.log('Error',e);
      
    }
  };
//   useEffect(
    
//       const fetchData = async () => {
//         try {
//           const response = await axios.get('https://medimate-be.onrender.com/Auth/profile');
//           setDataUser(response.data)
//           console.log('Data2', dataUser);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//           setDataUser('NoUser')
//         }
//       }
      
  
//     , []
// );
  
  
  return (

    <View style={stylesHome.container}>
      <View style={stylesHome.searchBar}>
        <MaterialCommunityIcons size={30} color={'#30A2FF'} name='magnify' ></MaterialCommunityIcons>
        <TextInput style={stylesHome.Input} placeholderTextColor={'#30A2FF'} placeholder='Tìm kiếm bệnh viện'></TextInput>
      </View>
      <FlatList
        data={dataNews}
        ListHeaderComponent={RenderHeaderFlatlist}
        renderItem={RenderNews}
        style={stylesHome.Flatlist}
      >
      </FlatList>
    </View>


  );
};
