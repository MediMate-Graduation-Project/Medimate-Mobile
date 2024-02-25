import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomePage } from '../screens/Home';
import { TabNavigation } from './TabNavigation';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();
const CustomDrawer = (props: any) => {
    return <DrawerContentScrollView {...props}>
        <View style={styles.containerHeaderDrawer}>
            <Image source={require('../assets/logo.png')}></Image>
            <View style={styles.contanierUser}>
                <MaterialCommunityIcons name='account-circle' color={'#30A2FF'} size={30}></MaterialCommunityIcons>
                <Text style={styles.nameUser}>Nguyen Van Bien</Text>
            </View>
            <TouchableOpacity>
                <Text>Xem trang cá nhân</Text>
            </TouchableOpacity>
        </View>

        <DrawerItemList {...props} />
        <TouchableOpacity>
            <View style={styles.containerLogout}>
                <MaterialCommunityIcons name='logout' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                <Text style={styles.nameFeature}>Đăng xuất</Text>
            </View>
        </TouchableOpacity>
    </DrawerContentScrollView>

}
export const MyDrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerTitle: () =>
                    <View style={styles.containerLogo}>

                        <Image style={styles.image} source={require('../assets/logo.png')}></Image>
                        <Text style={styles.nameApp}>MediMate</Text>
                    </View>,
                headerStyle: { height: 100 },

            }} >
            <Drawer.Screen name='MYTATAB' component={TabNavigation} options={{
                drawerLabel: () =>
                    <View style={styles.containerdrawerLabel}>
                        <MaterialCommunityIcons name='home' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                        <Text style={styles.nameFeature}>Trang chủ</Text>
                    </View>
            }}>

            </Drawer.Screen>
            <Drawer.Screen name='setting' component={HomePage}
                options={{
                    drawerLabel: () =>
                        <View style={styles.containerdrawerLabel}>
                            <MaterialCommunityIcons name='cog' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                            <Text style={styles.nameFeature}>Cài đặt</Text>
                        </View>
                }}></Drawer.Screen>

            <Drawer.Screen name='help' component={HomePage} options={{
                drawerLabel: () =>
                    <View style={styles.containerdrawerLabel}>
                        <MaterialCommunityIcons name='help-circle-outline' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                        <Text style={styles.nameFeature}>Trợ giúp </Text>
                    </View>

            }}></Drawer.Screen>
            <Drawer.Screen name='security' component={HomePage} options={{
                drawerLabel: () =>
                    <View style={styles.containerdrawerLabel}>
                        <MaterialCommunityIcons name='security' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                        <Text style={styles.nameFeature}>Chính sách bảo mật </Text>
                    </View>

            }}></Drawer.Screen>
            <Drawer.Screen name='guideUse' component={HomePage} options={{
                drawerLabel: () =>
                    <View style={styles.containerdrawerLabel}>
                        <MaterialCommunityIcons name='home' color={'#30A2FF'} size={20}></MaterialCommunityIcons>
                        <Text style={styles.nameFeature}>Hướng dẫn đặt khám</Text>
                    </View>

            }}></Drawer.Screen>
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create(
    {
        containerLogo: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30,
            marginTop: 40

        },
        image: {
            marginBottom: 10
        },
        nameApp: {
            color: '#30A2FF',
            fontWeight: 'bold',
            fontSize: 25,

        },
        containerdrawerLabel: {
            flexDirection: 'row'
        },
        containerLogout: {
            flexDirection: 'row',
            marginLeft: 20,
        },
        nameFeature: {
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold'
        },
        containerHeaderDrawer: {
            justifyContent:'center',
            alignItems:'center'
        },
        contanierUser:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }
        ,
        nameUser:{
            fontSize:15,
            fontWeight:'bold',
            color:'black'
        }
    }
)