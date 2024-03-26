import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
const navigation = useNavigation();
export function News({ item }: any) {

  
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
           
            navigation.navigate('News',{url:item.url});
        }}>
            <View style={styles.containerImage}><Image width={100} height={100} source={{ uri: item.image }} borderRadius={15}/></View>
            <View style={styles.containerText}><Text style={styles.title}>{item.namenews}</Text></View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical:10, 
        backgroundColor: '#ECF0F1',
        borderRadius: 15
    },
    containerImage: {
        marginRight: 10,
    },
    containerText: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontWeight: 'normal'
    }
})