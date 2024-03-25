import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const ItemNotifi = ({ nameIcon, colorIcon, status, message, time }) => {
    return (
        <View style={styles.containerNotifi}>
            <View style={{flex:2}}>
                <View style={{ ...styles.containerIcon, backgroundColor: colorIcon }}>
                    <MaterialCommunityIcons name={nameIcon} color={colorIcon} size={25}></MaterialCommunityIcons>

                </View>
            </View>

            <View style={{ flex: 7 }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>{status}</Text>
                <Text>{message}</Text>
            </View>
            <Text style={{flex:1}} >{time}</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        containerIcon: {
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.4,
            marginRight: 10,
           
        },
        containerNotifi: {
            flexDirection: 'row',
            
           margin:20
        }
    }
)