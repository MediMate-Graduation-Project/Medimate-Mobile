import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { page } from "../constants";
import { mainColor } from "../common/colors";
import SessionStorage from "react-native-session-storage";

export const ModalCheckAuth = () => {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false); // Khởi tạo isVisible là false

    useEffect(() => {
        const UserData = SessionStorage.getItem('UserData');
        if (UserData == null) {
            setIsVisible(true); // Nếu UserData không tồn tại, hiển thị modal
        }
    }, []);

    const closeModal = () => {
        setIsVisible(false); // Hàm để đóng modal
    };

    return (
        <View style={styles.containerCheckAuth}>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>Bạn chưa đăng nhập</Text>
            {isVisible == false ? <><Image style={styles.imageModal} source={require('../assets/login.gif')} /><TouchableOpacity onPress={() => { closeModal(); navigation.navigate(page.login) }} style={[styles.button, { backgroundColor: mainColor }]}>
                <Text style={styles.titleButton}>Đăng nhập</Text>
            </TouchableOpacity></> : null}
            <Modal isVisible={isVisible} onBackdropPress={closeModal}>
                <View style={styles.containerModal}>

                    <View>
                        <Image style={styles.imageModal} source={require('../assets/login.gif')} />
                        <Text style={styles.message}>Vui lòng đăng nhập trước khi dùng tính năng này!</Text>

                        <View style={styles.containerButton}>
                            <TouchableOpacity onPress={() => { closeModal(); navigation.navigate('Trang chủ') }} style={[styles.button, { backgroundColor: '#FB3D56' }]}>
                                <Text style={styles.titleButton}>Quay lại trang chủ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { closeModal(); navigation.navigate(page.login) }} style={[styles.button, { backgroundColor: mainColor }]}>
                                <Text style={styles.titleButton}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCheckAuth: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        width: 150,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20
    },
    titleButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    imageModal: {
        width: 300,
        height: 300,
        objectFit: 'contain'
    },
    message: {
        color: 'red',
        fontWeight: 'bold',
    },
    containerModal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20,
    }
});
