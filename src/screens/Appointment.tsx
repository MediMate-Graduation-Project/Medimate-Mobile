import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useAuth} from '../components/AuthContext';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {mainColor} from '../common/colors';
import {
  useActualNumber,
  useCancel,
  useUserNumber,
} from '../hooks/useAppointment';
import {useProfile} from '../hooks/useAuth';
import moment from 'moment';
import { AppointmentDetail } from '../components/AppointmentDetail';
import { useGetHospitalDetail } from '../hooks/useHospital';

export const AppointmentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data: userData} = useProfile();
  const {data: userNumber} = useUserNumber(userData?.id);
  const hospitalId = userNumber?.hospital?.id;
  const {mutate: cancel, isError, error} = useCancel();
  const {data: appointment} = useActualNumber(hospitalId);
  const datetime = moment(
    userNumber?.estimatedFormatted,
    'dddd, MMMM DD, YYYY [at] hh:mm:ss A',
  );
  const {data: hospital} = useGetHospitalDetail(hospitalId)
  const formattedDate = moment(datetime).format('DD/MM/YYYY');
  const formattedTime = moment(datetime).format('hh:mm A');
  const appointmentId = userNumber?.id;
  const appointmentData= {...userNumber,hospitalId: hospitalId}
  
  const HandleCancel = () => {
    cancel(appointmentId);
  };
  const HandleSeeMoreDetail = () => {
    setIsOpen(true)
  }
  console.log();
  
  return (
    <View style={styles.container}>
      {appointment?.actualNumber !== undefined &&
        userNumber?.orderNumber !== undefined &&
        userNumber?.orderNumber >= appointment?.actualNumber && (
          <View>
            <View style={styles.buttonViewContainer}>
              <Pressable style={styles.buttonViewCancel} onPress={HandleCancel}>
                <Text style={styles.cancelButtonText}>Hủy lịch</Text>
              </Pressable>
              <Pressable style={styles.buttonViewMore} onPress={HandleSeeMoreDetail}>
                <Text style={styles.viewMoreText}>Xem chi tiết</Text>
              </Pressable>
            </View>
            <View style={styles.inforContainer}>
              <View style={styles.numberContainer}>
                <View style={styles.numberView}>
                  <View style={styles.nameView}>
                    <Text style={styles.nameText}>
                      {hospital?.name}
                    </Text>
                  </View>
                  <View style={styles.nextNumberView}>
                    {appointment?.nextThreeAppointments?.map((item: any) => (
                      <View style={styles.nextNumber} key={item}>
                        <Text style={styles.nextNumberText}>{item.orderNumber}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.numberCircle}>
                  <Text style={styles.currentNumber}>
                    {appointment?.actualNumber}
                  </Text>
                </View>
                <View style={styles.numberCircle2}></View>
                <View style={styles.myNumberView}>
                  <Text style={styles.timeText}>Dự kiến {formattedTime}</Text>
                  <Text style={styles.timeText}>
                    Số thứ tự:
                    <Text style={styles.numberText}>
                      {userNumber?.orderNumber}
                    </Text>
                  </Text>
                </View>
              </View>
              
            </View>
          </View>
        )}

      <View style={styles.historyContainer}>
        <Text style={styles.title}>Lịch sử</Text>
        <View style={styles.cardView}>
          <Pressable style={styles.card}>
            <Image
              source={require('../assets/hospital1.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Bệnh viện Đà Nẵng</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.detailText}>29/11/2023</Text>
                <Text style={styles.detailText}>09:30 AM</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.card}>
            <Image
              source={require('../assets/hospital1.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Bệnh viện Đà Nẵng</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.detailText}>29/11/2023</Text>
                <Text style={styles.detailText}>09:30 AM</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.card}>
            <Image
              source={require('../assets/hospital1.png')}
              style={styles.image}
              borderRadius={30}
            />
            <View style={styles.inforView}>
              <Text style={styles.nameText}>Bệnh viện Đà Nẵng</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.detailText}>29/11/2023</Text>
                <Text style={styles.detailText}>09:30 AM</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      {appointmentData && isOpen && <AppointmentDetail prompt={appointmentData} schedule={false} isOpen= {isOpen} setIsOpen={setIsOpen}/>}

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
  buttonViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonViewCancel: {
    borderRadius: 16,
    borderColor: '#FB3D56',
    borderWidth: 2,
    width: 91,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonViewMore: {
    borderRadius: 16,
    borderColor: mainColor,
    borderWidth: 2,
    width: 91,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 12,
    color: '#FB3D56',
  },
  viewMoreText: {
    fontSize: 12,
    color: mainColor,
  },
  historyContainer: {
    // flex:1,
    // marginTop:20,
    flexDirection: 'column',
    gap: 10,
  },
  inforContainer: {
    // flex: 1,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'blue',
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
    // flex: 1
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
  currentNumber: {
    color: '#FB3D56',
    fontSize: 36,
    fontWeight: '700',
  },
  numberCircle2: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 12,
    borderColor: mainColor,
    // position: 'absolute',
    zIndex: -2,
    alignSelf: 'center',
    width: 100,
    height: 100,
    // backgroundColor:'#000'
  },
  myNumberView: {
    alignSelf: 'flex-end',
    backgroundColor: mainColor,
    padding: 8,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 8,
    position: 'absolute',
    right: 0,
    bottom: '-35%',
  },
  timeText: {
    color: '#fff',
    fontSize: 12,
    alignSelf: 'center',
  },
  numberText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  nameView: {
    maxWidth: 110,
  },
  nextNumberView: {
    flexDirection: 'row',
    gap: 5,
  },
  nextNumber: {
    borderColor: mainColor,
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
  },
  nextNumberText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
  inforView: {
    flexDirection: 'column',
    gap: 9,
    // justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  detailText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#000',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: mainColor,
  },
  cardView: {
    flexDirection: 'column',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
 
});
