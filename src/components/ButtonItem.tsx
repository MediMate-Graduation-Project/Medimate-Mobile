import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { mainColor } from "../common/colors";

export const ButtonItem = ({ handleOnpresLeft, titleLeft, handleOnpresRight, titleRight }: any) => {
    return (
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonLeft} onPress={handleOnpresLeft}>
                <Text style={styles.textButton}>
                    {titleLeft}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight} onPress={(handleOnpresRight)}>
                <Text style={styles.textButton}>
                    {titleRight}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    buttonLeft: {
        backgroundColor: '#FB3D56',
        padding: 10,
        borderRadius: 15,
        marginRight: 20,
        width: 150,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton: {
        color: 'white',
        padding: 5
    },
    buttonRight: {
        backgroundColor: mainColor,
        padding: 10,
        borderRadius: 15,
        width: 150,
        justifyContent:'center',
        alignItems:'center'
    },
})