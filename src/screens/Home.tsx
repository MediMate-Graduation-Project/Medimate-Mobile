import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderFlatList } from '../components/HomePage/HeaderFlatList';
import { News } from '../components/HomePage/News';
import { stylesHome } from '../styles/Home';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SessionStorage from 'react-native-session-storage';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../hooks/useAuth';


export const HomePage = () => {
  const navigation = useNavigation()

  const dataNews = [
    {
      id: 1,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_30/doi-dac-nhiem-1-5946.jpg.webp',
      namenews: 'Đà Nẵng: Nhiều trường hợp đa chấn thương do pháo nổ nhập viện cấp cứu',
      url:'https://baodienbienphu.com.vn/tin-tuc/y-te/212838/da-nang-nhieu-truong-hop-da-chan-thuong-do-phao-no-nhap-vien-cap-cuu'
    },
    {
      id: 2,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_11/bn-t-5333.jpg.webp',
      namenews: 'Cứu sống bệnh nhân bị đứt lìa phế quản gốc của phổi trái',
      url:'https://nhandan.vn/cuu-song-benh-nhan-bi-dut-lia-phe-quan-goc-cua-phoi-trai-post791607.html'
    },
    {
      id: 3,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_12_07/u1-9459.jpg.webp',
      namenews: 'Nhiều khoa xét nghiệm của Bệnh viện Đà Nẵng đạt chuẩn ISO 15189:2012',
      url:'https://nhandan.vn/nhieu-khoa-xet-nghiem-cua-benh-vien-da-nang-dat-chuan-iso-151892012-post786235.html'
    },
    {
      id: 4,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_11_03/1a-1094.jpg.webp',
      namenews: 'Vụ nổ tại nhà máy đóng tàu Dung Quất: 3 bệnh nhân nguy kịch',
      url:'https://nhandan.vn/vu-no-tai-nha-may-dong-tau-dung-quat-3-benh-nhan-nguy-kich-post780956.html#:~:text=NDO%20%2D%20T%E1%BB%91i%203%2F11%2C,3%20b%E1%BB%87nh%20nh%C3%A2n%20nguy%20k%E1%BB%8Bch.'
    }
  ]

  // const { data: Userdata, isSuccess, isLoading, isError } = useQuery({
  //   queryKey: ['userProfile'],
  //   queryFn: async () => {
  //     const response = await axios.get('https://medimate-be.onrender.com/Auth/profile');
  //     return response.data
  //   },
  // })
  // if (isSuccess) {
  //   SessionStorage.setItem('UserData', Userdata);
  // } if (isError) {
  //   SessionStorage.setItem('UserData', null)
  // }
  // const data = SessionStorage.getItem('UserData')
  // console.log('data', data );
  const {data: userData} = useProfile()
  useEffect(()=>{
    if(userData?.role=='HOSPITAL'){
      navigation.navigate('doctor')
    }
  },[userData])
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
