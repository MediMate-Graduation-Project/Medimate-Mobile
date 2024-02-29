import {View, StyleSheet, Image, Text, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Boundary} from './boundary';

export default function Card() {
  const navigation = useNavigation();
  const data = {
    hospitalName: 'Bệnh viện Hoàn Mỹ Đà Nẵng',
    address: '99 Tô Hiến Thành',
    status: true,
  };
  return (
    <Boundary title={'Menu'}>
      <Pressable onPress={() => {}}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.name}>{data.hospitalName}</Text>
            <View style={styles.rating}>
              <MaterialCommunityIcons name="star-outline" color="#30A2FF" />
              <MaterialCommunityIcons name="star-outline" color="#30A2FF" />
              <MaterialCommunityIcons name="star-outline" color="#30A2FF" />
              <MaterialCommunityIcons name="star-outline" color="#30A2FF" />
              <MaterialCommunityIcons name="star-outline" />
            </View>
            <Text style={styles.address}>{data.address}</Text>
            {/* <Text style={styles.rate}>{data.rate}</Text> */}
            <Text style={styles.status}>
              {data.status ? 'Đang mở cửa' : 'Đã đóng cửa'}
            </Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Đặt khám</Text>
          </Pressable>
        </View>
      </Pressable>
    </Boundary>
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
