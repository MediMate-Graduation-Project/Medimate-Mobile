import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonMain = ({title,handleOnpres}:any) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={(handleOnpres)}>
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons: {
        padding: 10,
        width: 300,
        borderRadius: 15,
        backgroundColor: '#30A2FF',
        marginBottom: 20
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})