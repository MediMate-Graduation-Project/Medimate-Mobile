import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { mainColor } from "../common/colors";
import { ButtonItem } from "./ButtonItem";
import { useNavigation } from "@react-navigation/native";
import Modal from 'react-native-modal';
export const NoticeAppointment = () => {
    const navigation = useNavigation()
    return (
        <Modal  isVisible={true} animationIn={'bounceInLeft'}>
            <View style={styles.container}>
                <Image style={{objectFit:'contain', width:'100%'}} source={require('../assets/backgroud_NotificateAppoint.png')}></Image>
                <Image style={styles.Image} source={require('../assets/Successfuly.gif')}></Image>
                {/* <View style={{marginBottom:200}}></View> */}
                <Text style={styles.status}>Đặt lịch thành công!</Text>
                <ButtonItem titleLeft='Quay về trang chủ' 
                handleOnpresLeft={() => navigation.navigate('Trang chủ')}
                titleRight='Xem chi tiết lịch'
                handleOnpresRight={() => navigation.navigate('schedule')}
                 />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            borderRadius:20,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent:'center'
        },
        Image: {
            position: 'absolute',
            width:300,
            height:300,
            top:20
        },
        status:{
            color: mainColor,
             fontSize: 25, 
             fontWeight: 'bold',
              marginBottom: 25
        }
    }
)