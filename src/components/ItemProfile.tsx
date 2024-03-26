import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainColor } from "../common/colors";
export const ItemProfile = ({ nameService, nameIcon }: any) => {
    return (
        <View style={styles.containerItem}>
            <View style={{ flex: 2}}>
                <MaterialCommunityIcons size={30} color={mainColor} name={nameIcon}></MaterialCommunityIcons>
            </View>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 15,  fontWeight: 'bold', color:'#6C7A89' }}>{nameService}</Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: mainColor,
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        marginStart:50,
        marginEnd:50,
        marginBottom:20
    }
})