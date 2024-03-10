import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from "../../common/colors";

export const ServiceItem = ({name,icon,navigation}:any) => {
    return (
        <View style={styles.containerItemService1}>
            <MaterialCommunityIcons size={50} color={mainColor} name={icon} ></MaterialCommunityIcons>
            <TouchableOpacity onPress={navigation}>
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    containerItemService1: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: 'black',
        fontWeight:'bold'
    }
})