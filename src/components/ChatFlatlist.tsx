import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const navigation=useNavigation();
export const ChatFlatlist = ({ item }: any) => {
    
    return (
        <TouchableOpacity onPress={()=>{
         navigation.navigate('DetailChat',{id:item.id,image:item.image,name:item.name})
        }}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.image }}></Image>
                <View>
                    <Text style={styles.nameHospital}>{item.name}</Text>
                    <Text>Chúng tôi có thể giúp gì cho bạn</Text>
                </View>
                <Text>09:30 AM</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            borderColor: 'grey',
            margin: 10,
            borderRadius: 10,
            padding: 10
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 50
        },
        nameHospital: {
            fontWeight: 'bold',
            color: 'black'
        }
    }
)