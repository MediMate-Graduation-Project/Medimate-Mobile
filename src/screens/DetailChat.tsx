import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useGetHospitalDetail } from "../hooks/useHospital";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from "react-native";
import { mainColor } from "../common/colors";
import { useNavigation } from "@react-navigation/native";
import { useProfile } from "../hooks/useAuth";
export const DetailChat = ({ route }: { route: any }) => {
    const { id, image, name } = route.params;

    const {data: DataUser} = useProfile()
    const nameUser = DataUser.name;
    console.log('name', nameUser);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Tin nhắn')}>
                    <MaterialCommunityIcons size={30} color={'black'} name='arrow-left'></MaterialCommunityIcons>
                </TouchableOpacity>

                <Image style={styles.image} source={{ uri: image }} ></Image>
                <View>
                    <Text>{name}</Text>
                    <Text style={{ color: 'green' }}>Online</Text>
                </View>
            </View>
            <View style={styles.Right}>
                <View style={styles.ViewFirst}>
                    <Text style={{ fontWeight: 'normal', color: 'black', borderRadius: 15, backgroundColor: '#D9D9D9', padding: 10 }}>Xin chào! Chúng tôi có thể giúp gì cho bạn</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.imageUser} source={{ uri: image }}></Image>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{name}</Text>
                    </View>
                </View>
                <View style={styles.ViewSecond}></View>
            </View>
            <View style={styles.Right}>
                <View style={styles.ViewSecond}></View>
                <View style={styles.ViewFirst}>
                    <View style={{ borderRadius: 15, backgroundColor: mainColor, padding: 10 }}>
                        <MaterialCommunityIcons color='white' size={20} name="play-circle"></MaterialCommunityIcons>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons size={20} name="account-circle"></MaterialCommunityIcons>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{nameUser}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.Right}>

                <View style={styles.ViewFirst}>
                    <Text style={{ fontWeight: 'normal', color: 'black', borderRadius: 15, backgroundColor: '#D9D9D9', padding: 10 }}>Tất nhiên rồi! Tôi sẽ giúp bạn. Hãy đợi tôi vài phút để tôi kiểm tra</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.imageUser} source={{ uri: image }}></Image>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{name}</Text>
                    </View>
                </View>
                <View style={styles.ViewSecond}></View>
            </View>

            <View style={styles.Right}>
                <View style={styles.ViewSecond}></View>
                <View style={styles.ViewFirst}>
                    <View style={{ borderRadius: 15, backgroundColor: mainColor, padding: 10 }}>
                        <Text style={{ color: 'white' }}>Dạ vâng ạ</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons size={20} name="account-circle"></MaterialCommunityIcons>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>{nameUser}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', borderRadius: 10, padding: 10, justifyContent: 'space-between', margin: 50, alignItems: 'center', backgroundColor: '#D9D9D9' }}>
                <MaterialCommunityIcons size={20} color={mainColor} name="plus-box-outline"></MaterialCommunityIcons>
                <TextInput placeholder="Nhập tin nhắn ở đây..."></TextInput>
                <MaterialCommunityIcons name="microphone-settings" color={mainColor} size={20}></MaterialCommunityIcons>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    Right: {
        flexDirection: 'row',
        margin: 10
    },
    ViewFirst: {
        flex: 3,
        marginBottom: 5,

    },
    ViewSecond: {
        flex: 2
    },
    imageUser: {
        width: 20,
        height: 20,
        borderRadius: 50
    }
})