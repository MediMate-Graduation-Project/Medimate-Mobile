import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const ItemDrawer = ({nameIcon, nameFeature }: any) => {
    return (

        <View style={styles.containerdrawerLabel}>
            <MaterialCommunityIcons name={nameIcon} color={'#30A2FF'} size={20}></MaterialCommunityIcons>
            <Text style={styles.nameFeature}>{nameFeature}</Text>
        </View>
    
    )
}

const styles = StyleSheet.create(
    {
        containerdrawerLabel: {
            flexDirection: 'row',
            gap: 10
        },
        nameFeature: {
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold'
        },
    }
)