import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from "../common/colors";
export const ItemProfile = ({ nameService, nameIcon }: any) => {
    return (
        <View style={styles.containerItem}>
            <View style={{ flex: 1 }}>
                <MaterialCommunityIcons size={50} color={mainColor} name={nameIcon}></MaterialCommunityIcons>
            </View>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 20, marginLeft: 50, fontWeight: 'bold' }}>{nameService}</Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: mainColor,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 20
    }
})