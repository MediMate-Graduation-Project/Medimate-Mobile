import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {mainColor} from '../../common/colors';
import {TouchableOpacity} from 'react-native';
import {useAuth} from '../../components/AuthContext';
import { useActualNumber } from '../../hooks/useAppointment';

export const AppointmentDoctor = () => {
  const {hasUser} = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const hospitalId=1;
  // const {data} = useActualNumber(hospitalId)
  // console.log(42, data);
  useFocusEffect(
    useCallback(() => {
      if (hasUser === false) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    }, [hasUser]),
  );

  console.log(hasUser);
  
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={styles.numberContainer}>
            <View style={styles.numberCircle}>
              <Text style={styles.currentNumber}>20</Text>
            </View>
            <View style={styles.numberCircle2}></View>
          </View>
          <View style={styles.buttonView}>
            <Pressable style={styles.button} >
              <Text style={styles.text}>Số tiếp theo</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.patientContainer}>
        <Text style={styles.text}>Danh sách khám bệnh</Text>
        <View style={styles.cardView}>
          <Pressable style={styles.card}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Nguyễn Văn A</Text>
              <View style={styles.detailView}>
                <Text style={styles.detailText}>STT:</Text>
                <Text style={styles.text}>21</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.card}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Nguyễn Văn A</Text>
              <View style={styles.detailView}>
                <Text style={styles.detailText}>STT:</Text>
                <Text style={styles.text}>21</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.card}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Nguyễn Văn A</Text>
              <View style={styles.detailView}>
                <Text style={styles.detailText}>STT:</Text>
                <Text style={styles.text}>21</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'column',
    gap: 40,
  },
  patientContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderColor: '#c0c1c2',
  },
  button:{
    marginTop:20,
    alignSelf:'center',
    borderRadius: 10,
    borderWidth:1,
    borderColor: mainColor,
    padding: 8
  },
  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderColor: '#c0c1c2',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
    backgroundColor: '#fff',
  },
  numberCircle: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderColor: '#c0c1c2',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberCircle2: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderColor: mainColor,
    zIndex: -2,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },

  currentNumber: {
    color: '#FB3D56',
    fontSize: 36,
    fontWeight: '700',
  },
  inforView: {
    flex: 1,
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  detailView: {
    flexDirection: 'row',
    gap: 5,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  detailText: {
    fontSize: 15,
    color: '#000',
  },
  cardView: {
    flexDirection: 'column',
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 15,
    color: mainColor,
    fontWeight: '700',
  },
});
