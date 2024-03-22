import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Boundary} from '../components/Boundary.jsx';
import {Modalize} from 'react-native-modalize';
import {Rating} from '../components/Rating.jsx';
import {useGetHospitalDetail} from '../hooks/useHospital.jsx';

export const HospitalDetail = ({route}: {route: any}) => {
  const {id} = route.params || {};
  const data = useGetHospitalDetail(id);
  const [numberOfLines, setNumberOfLines] = useState(3);

  return (
    <Boundary background={require('../assets/Background.png')} hospitalId={id}>
      <Modalize alwaysOpen={550}>
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.name}>{data.data?.name}</Text>
            <Text style={styles.address}>{data.data?.address}</Text>
            <Text style={styles.title}>Giới thiệu về bệnh viện</Text>
            <Text style={styles.address} numberOfLines={numberOfLines}>
              {data.data?.introduce}
            </Text>
          </View>
          <Text
            style={styles.moreText}
            onPress={() => {
              numberOfLines == 0 ? setNumberOfLines(3) : setNumberOfLines(0);
            }}>
            {data.data?.introduce && numberOfLines == 0
              ? 'Rút gọn'
              : 'Xem thêm'}
          </Text>
          <View style={styles.imageContainer}>
            <Text style={styles.title}>Hình ảnh</Text>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/hospital1.png')}
                style={styles.image}></Image>
              <Image
                source={require('../assets/hospital2.png')}
                style={styles.image}></Image>
              <Image
                source={require('../assets/hospital3.png')}
                style={styles.image}></Image>
              <Image
                source={require('../assets/hospital4.png')}
                style={styles.image}></Image>
            </View>
            <Text style={styles.moreText}>Xem thêm</Text>
          </View>
          <View>
            <Text style={styles.title}>Đánh giá</Text>
            {data.data?.reviews.map((item: any) => (
              <View style={styles.feedbackView} key={item}>
                <View style={styles.infoView}>
                  <MaterialCommunityIcons
                    name="account"
                    size={40}
                    style={styles.avatar}
                  />
                  <View style={styles.contentRight}>
                    <Text style={styles.title}>{item?.users.name}</Text>
                    <Text style={styles.reviewText}>{item?.review}</Text>
                    <View style={styles.rating}>
                      <Rating number={item?.rating} />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Modalize>
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
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 10,
  },
  image: {
    width: 150,
    height: 100,
  },
  moreText: {
    color: '#30A2FF',
    fontWeight: '700',
    alignSelf: 'flex-end',
    fontSize: 15,
    marginTop: 5,
  },
  feedbackView: {
    flexDirection: 'column',
    marginTop: 15,
  },
  infoView: {
    flexDirection: 'row',
  },
  avatar: {
    // borderRadius: 20,
    // borderWidth: 1,
    // height: 40
  },
  reviewText: {
    color: '#000000',
    fontSize: 15,
  },
  contentRight: {
    flexDirection: 'column',
    gap: 5,
    paddingRight: 30,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
});
