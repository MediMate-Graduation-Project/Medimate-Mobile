import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Boundary} from './Boundary';
import { useGetHospitalDetail } from '../hooks/useHospital';
import { Rating } from './Rating';
import { page } from '../constants';

export default function Card({ id }) {
  const   data = useGetHospitalDetail(id);
  const navigation = useNavigation()
  const rating = 2
  return (
    // <Boundary title={'Menu'}>
      <Pressable onPress={() => {navigation.navigate(page.detail, { id: data.data?.id})}}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.name}>{data.data?.hospitalName}</Text>
            <View style={styles.rating}>
              <Rating number={rating}/>
            </View>
            <Text style={styles.address}>{data.data?.address}</Text>
            <Text style={styles.status}>
              {data.data?.status ? 'Đang mở cửa' : 'Đã đóng cửa'}
            </Text>
          </View>
          <Pressable style={styles.button}  onPress={() => {navigation.navigate(page.schedule, { id: data.data?.id})}}>
            <Text style={styles.buttonText} >Đặt khám</Text>
          </Pressable>
        </View>
      </Pressable>
    // </Boundary>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    margin: 2,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 140,
    alignItems: 'center',
    gap: 10,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 21,
    borderWidth: 1,
    borderColor: '#b6bab7',
  },
  content: {
    alignItems: 'start',
    flexDirection: 'column',
    gap: 5,
    width: '70%',
  },
  name: {
    fontWeight: '700',
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#30A2FF',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
  },
  status: {
    color: '#30A2FF',
  },
});
