import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Stars from 'react-native-stars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const RenderHospital = ({ item }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfor}>
                <TouchableOpacity >
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.containeritemInfor}>
                        <Image width={100} height={100} style={{ objectFit: 'scale-down' }} source={{ uri: item.image }} />
                        <View style={styles.itemInfor}>
                            <Text style={styles.address}>{item.address}</Text>
                            <View style={styles.star}>
                                <Stars
                                    display={2}
                                    spacing={8}
                                    count={5}
                                    starSize={40}
                                    fullStar={<MaterialCommunityIcons size={20} color={'yellow'} name='star' ></MaterialCommunityIcons>}
                                    emptyStar={<MaterialCommunityIcons size={20} color={'yellow'} name='star-half-full' ></MaterialCommunityIcons>} />

                            </View>

                        </View>

                    </View>

                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ECF0F1',
        padding: 20,
        margin: 20,
        borderRadius:20
    },
    containerInfor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: {
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    address: {
        color: 'black',
        fontWeight: 'normal'
    },
    containeritemInfor: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    star: {
        flexDirection: 'row'
    },
    itemInfor: {
        marginLeft: 5
    }
})