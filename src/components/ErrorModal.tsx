import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const ErrorModal = ({message,handleNavigate,image}:any) => {
    return (
        <View style={styles.containerErrorDiagnose}>
            <Image style={{ width: 200, height: 200, objectFit: 'contain' }} source={image}></Image>
            <Text style={{ color: 'red', fontWeight: 'bold', margin: 10 }}>
                {message}
            </Text>
            <TouchableOpacity style={styles.buttonBackHome} onPress={handleNavigate} >
                <Text style={styles.textButton}>
                    Nhập lại
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerErrorDiagnose: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 20,
    },
    buttonBackHome: {
        backgroundColor: '#FB3D56',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
    },
    textButton: {
        color: 'white',
        padding: 5
    },
})