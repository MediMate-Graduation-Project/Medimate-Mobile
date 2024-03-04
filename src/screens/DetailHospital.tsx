import React, {Children} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Boundary} from '../components/boundary';
import {mainColor} from '../common/colors';

export const DetailHospital = () => {
  const hospital = {
    name: 'Bệnh viện 199',
    address: 'Địa chỉ: Số 216, Nguyễn Công Trứ, Quận Sơn Trà, Tp. Đà Nẵng',
    info: 'Đi vào hoạt động từ năm 1999, đến nay bệnh viện 199 có 450 giường bệnh điều trị nội ngoại trú với 27 chuyên khoa và 5 phòng chức năng cùn...',
  };
  return (
    <Boundary background={require('../assets/Background.png')} title={''}>
      <ScrollView style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.name}>{hospital.name}</Text>
          <Text style={styles.address}>{hospital.address}</Text>
          <Text style={styles.title}>Giới thiệu về bệnh viện</Text>
          <Text style={styles.address}>{hospital.info}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Hình ảnh</Text>
          <View style={styles.imageView}>
            <Image source={require('../assets/hospital1.png')}></Image>
            <Image source={require('../assets/hospital1.png')}></Image>
            <Image source={require('../assets/hospital1.png')}></Image>
            <Image source={require('../assets/hospital1.png')}></Image>
          </View>
          <Text style={styles.moreText}>Xem thêm</Text>
        </View>
        <View>
          <Text style={styles.title}>Đánh giá</Text>
          <View>
           
          </View>
        </View>
      </ScrollView>
    </Boundary>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    marginTop: 120,
    // marginStart: 50
  },
  name: {
    fontSize: 23,
    color: '#000000',
    fontWeight: 'bold',
  },
  address: {
    fontStyle: 'italic',
    color: '#000000',
    fontSize: 15,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '700',
  },
  info: {
    flexDirection: 'column',
    gap: 10,
  },
  imageContainer: {
    paddingVertical: 20,
  },
  imageView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 10,
  },
  moreText: {
    color: mainColor,
    fontWeight: '700',
    alignSelf: 'flex-end',
    fontSize: 17,
    marginTop: 5,
  },
});
