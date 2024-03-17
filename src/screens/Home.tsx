import React from 'react';
import { FlatList } from 'react-native';
import { TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderFlatList } from '../components/HomePage/HeaderFlatList';
import { News } from '../components/HomePage/News';
import { stylesHome } from '../styles/Home';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SessionStorage from 'react-native-session-storage';


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

  const { data: Userdata, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response = await axios.get('https://medimate-be.onrender.com/Auth/profile');
      return response.data
    },
  })
  if (isSuccess) {
    SessionStorage.setItem('UserData', Userdata);
  } if (isError) {
    SessionStorage.setItem('UserData', null)
  }
  const data = SessionStorage.getItem('UserData')
  console.log('data', data != null);
  return (

    <View style={stylesHome.container}>
      <View style={stylesHome.searchBar}>
        <MaterialCommunityIcons size={30} color={'#30A2FF'} name='magnify' ></MaterialCommunityIcons>
        <TextInput style={stylesHome.Input} placeholderTextColor={'#30A2FF'} placeholder='Tìm kiếm bệnh viện'></TextInput>
      </View>
      <FlatList
        data={dataNews}
        ListHeaderComponent={HeaderFlatList}
        renderItem={News}
        style={stylesHome.Flatlist}
      >
      </FlatList>
    </View>


  );
};
