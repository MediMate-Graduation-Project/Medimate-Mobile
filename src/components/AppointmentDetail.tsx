import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ButtonItem} from './ButtonItem';
import Modal from 'react-native-modal';
import {useProfile} from '../hooks/useAuth';
import {useGetHospitalDetail} from '../hooks/useHospital';
import moment from 'moment';
import {
  useCancel,
  useCancelSchedule,
  useConfirmSchedule,
} from '../hooks/useAppointment';
import {mainColor} from '../common/colors';

type Props = {
  prompt: any;
  schedule: boolean;
  setIsOpen: any;
  isOpen: boolean;
};
export const AppointmentDetail = ({
  prompt,
  schedule,
  setIsOpen,
  isOpen,
}: Props) => {

  const {data: userData} = useProfile();
  const {data: hospital} = useGetHospitalDetail(prompt?.hospitalId);
  const orderNumber = prompt?.orderNumber;
  const datetime = moment(prompt?.estimated).format('DD/MM/YYYY hh:mm A');
  const {mutate: cancel} = useCancelSchedule();
  const {mutate: confirm} = useConfirmSchedule();

  const HandleCancel = () => {
    cancel(prompt?.id);
    setIsOpen(false);
  };
  const HandleConfirm = () => {
    confirm(prompt?.id);
    setIsOpen(false);
  };
  return (
    <Modal isVisible={isOpen} animationIn={'bounceInLeft'}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>THÔNG TIN ĐẶT LỊCH</Text>
        </View>
        <View style={styles.containerInfor}>
          <Text style={styles.inforContainer}>
            <Text style={styles.textBold}>Họ và tên: </Text><Text style={styles.text}>{userData?.name}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text style={styles.textBold}>Bệnh viện: </Text><Text style={styles.text}> {hospital?.name}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text style={styles.textBold}>Địa chỉ: </Text><Text style={styles.text}>{hospital?.address}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text style={styles.textBold}>Số thứ tự: </Text><Text style={styles.text}> {orderNumber}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text style={styles.textBold}>Thời gian khám dự kiến: </Text><Text style={styles.text}> {datetime}</Text>
          </Text>
        </View>
        {schedule ? (
          <ButtonItem
            handleOnpresLeft={HandleCancel}
            titleLeft="Quay lại"
            handleOnpresRight={HandleConfirm}
            titleRight="Xác nhận đặt lịch"
          />
        ) : (
          <Pressable onPress={() => setIsOpen(false)} style={styles.okButton}>
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  containerTitle: {
    alignItems: 'center',
    paddingVertical: 10
  },
  container: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    color:'#000'
  },
  text:{
    color:'#000'
  },
  textBold:{
    color:'#000',
    fontWeight:'700'
  },
  containerInfor: {
    borderWidth: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    marginBottom: 10,
    flexDirection:'column',
    gap: 15,
    padding: 10
  },
  okButton: {
    backgroundColor: mainColor,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
