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
  console.log(20, schedule);

  const {data: userData} = useProfile();
  const {data: hospital} = useGetHospitalDetail(prompt?.hospitalId);
  const orderNumber = prompt?.orderNumber;
  const datetime = moment(prompt?.estimated).format('DD/MM/YYYY hh:mm A');
  const {mutate: cancel} = useCancelSchedule();
  const {mutate: confirm} = useConfirmSchedule();

  const HandleCancel = () => {
    cancel(prompt?.appointment?.id);
    setIsOpen(false);
  };
  const Cancel = () => {
    setIsOpen(false);
  };
  const HandleConfirm = () => {
    confirm(prompt?.appointment?.id);
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
            <Text>Họ và tên: {userData?.name}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text>Bệnh viện: {hospital?.name}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text>Địa chỉ: {hospital?.address}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text>Số thứ tự: {orderNumber}</Text>
          </Text>
          <Text style={styles.inforContainer}>
            <Text>Thời gian khám dự kiến: {datetime}</Text>
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
  },
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  containerInfor: {
    borderWidth: 1,
    width: 340,
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  inforContainer: {
    padding: 10,
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
