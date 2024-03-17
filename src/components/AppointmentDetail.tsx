import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonItem } from "./ButtonItem";

export const AppointmentDetail = ({ prompt }: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}><Text style={styles.textTitle}>THÔNG TIN ĐẶT LỊCH</Text></View>
            <View style={styles.containerInfor}>
                <Text style={styles.inforContainer}><Text>Họ và tên:</Text></Text>
                <Text style={styles.inforContainer}><Text>Bệnh viện:</Text></Text>
                <Text style={styles.inforContainer}><Text>Địa chỉ:</Text></Text>
                <Text style={styles.inforContainer}><Text>Khoa khám:</Text></Text>
                <Text style={styles.inforContainer}><Text>Phòng khám:</Text></Text>
                <Text style={styles.inforContainer}><Text>Số thứ tự:</Text></Text>
                <Text style={styles.inforContainer}><Text>Thời gian khám dự kiến:</Text></Text>
                <ButtonItem
                    handleOnpresLeft={null}
                    titleLeft='Quay lại'
                    handleOnpresRight={null}
                    titleRight='Xác nhận đặt lịch' />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    containerTitle: {
        alignItems: 'center',
        
    },
    container: {
        flex: 1,
        alignItems:'center',
       
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:10
    },
    containerInfor: {
        borderWidth: 1,
        width:'auto',
        height:'auto',
        padding:10,
        borderRadius:20
    },
    inforContainer:{
        padding:10
    }
})