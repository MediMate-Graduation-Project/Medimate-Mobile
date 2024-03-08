import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const News = ({ item }: any) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerImage}><Image width={100} height={100} source={{uri: item.image}}/></View>
            <View style={styles.containerText}><Text style={styles.title}>{item.namenews}</Text></View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:20,
        backgroundColor:'#ECF0F1',
    },
   containerImage:{
    marginRight:10
   },
   containerText:{
    flex:3,
    alignItems:'center',
    justifyContent:'center'
   },
   title:{
    color:'black',
    fontWeight:'normal'
   }
})