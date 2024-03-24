import React, { useEffect, useState } from 'react';
import { useGetAllHospital } from '../hooks/useHospital.jsx';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modalize } from 'react-native-modalize';
import { mainColor } from '../common/colors.ts';
import Card from '../components/Card.jsx';
import axios from 'axios';
import { ButtonItem } from '../components/ButtonItem.tsx';
import { useNavigation } from '@react-navigation/native';
import { useQueries, useQuery } from '@tanstack/react-query';
import { queryKey } from '../constants/index.js';

export const HospitalList = ({ route }: { route: any }) => {
  const { lat, lon, nameAddress } = route.params;
  const [dataHospital, setData] = useState();
  const navigation = useNavigation();

  const { isLoading,data } = useQuery(
    {
      queryKey: ['nearHospital'],
      queryFn: async() => await axios.get(`https://medimate-be.onrender.com/hospitals/map?lat=${lat}&lon=${lon}`)
        .then(res => setData(res.data))
    }
  )
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} multiline
          numberOfLines={4}
          maxLength={400}
          editable={false}>
          {nameAddress}
        </TextInput>
        <MaterialCommunityIcons
          name="map-marker"
          size={30}
          color={mainColor}></MaterialCommunityIcons>
      </View>
      {/* <Modalize alwaysOpen={650}> */}
      <ScrollView style={styles.listView}>
        {isLoading ? <View style={{justifyContent:'center',alignItems:'center',flex:1}}><Image source={require('../assets/Loading_2.gif')}></Image></View>  : dataHospital != null ? dataHospital?.map((item: any) => (
          <Card key={item.id} id={item.id} />
        )) : <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>Không có bệnh viện nào gần địa chỉ của bạn</Text>
          <Image style={styles.ImageNoLocation} source={require('../assets/no_Location.jpg')}></Image>
          <ButtonItem titleLeft='Quay lại trang chủ' handleOnpresLeft={() => navigation.navigate('Trang chủ')} titleRight='Chọn lại vị trí' handleOnpresRight={() => navigation.navigate('Maps')} />
        </View>}
      </ScrollView>
      {/* </Modalize> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 5,
    flex: 1,
  },
  inputView: {
    borderWidth: 2,
    borderColor: mainColor,
    width: 340,
    height: 75,
    borderRadius: 20,
    paddingHorizontal: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 14,
    fontWeight: '700',
    color: mainColor,
  },
  listView: {
    marginTop: 20,
  },
  ImageNoLocation: {
    width: 300,
    height: 300,
    objectFit: 'contain'
  }
});
