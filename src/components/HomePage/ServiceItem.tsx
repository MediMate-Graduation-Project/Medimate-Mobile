import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ServiceItem = ({nameService,nameIcon,nameNavigation}:any) => {
    return (
        <View style={styles.containeritemService1}>
            <MaterialCommunityIcons size={50} color={'#30A2FF'} name={nameIcon} ></MaterialCommunityIcons>
            <TouchableOpacity onPress={nameNavigation}>
                <Text style={styles.nameService}>{nameService}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    containeritemService1: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameService: {
        color: 'black'
    }
})