import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonItem } from "./ButtonItem";
import Modal from "react-native-modal";
export const AppointmentDetail = ({ prompt }: any) => {

    return (
        <Modal
        isVisible={true}
        animationIn={'bounceInLeft'}
        >
            <View style={styles.container}>
                <View style={styles.containerTitle}><Text style={styles.textTitle}>THÔNG TIN ĐẶT LỊCH</Text></View>
                <View style={styles.containerInfor}>
                    <Text style={styles.inforContainer}><Text>Họ và tên: {prompt.name}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Bệnh viện: {prompt.hospital}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Địa chỉ: {prompt.address}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Khoa khám: {prompt.address}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Phòng khám: {prompt.address}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Số thứ tự: {prompt.address}</Text></Text>
                    <Text style={styles.inforContainer}><Text>Thời gian khám dự kiến: {prompt.address}</Text></Text>
                    
                </View>
                <ButtonItem
                        handleOnpresLeft={null}
                        titleLeft='Quay lại'
                        handleOnpresRight={null}
                        titleRight='Xác nhận đặt lịch' />
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    containerTitle: {
        alignItems: 'center',

    },
    container: {
        padding:20,
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius:15
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    containerInfor: {
        borderWidth: 1,
        width:350,
        height: 'auto',
        padding: 10,
        borderRadius: 20,
        marginBottom:10
    },
    inforContainer: {
        padding: 10
    }
})