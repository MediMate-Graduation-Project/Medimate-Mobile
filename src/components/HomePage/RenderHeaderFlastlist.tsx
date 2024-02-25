import React from "react"
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RenderHospital } from "./RenderHospital";
import { useNavigation } from "@react-navigation/native";
import { ServiceItem } from "./ServiceItem";
const data = [
  {
    id: 1,
    name: 'Bệnh viện Đa khoa Đà Nẵng',
    address: '124 Hải Phòng, quận Hải Châu',
    image: 'https://cms.haivan.com/photos/b%E1%BB%87nh%20vi%E1%BB%87n%20%C4%91%C3%A0%20n%E1%BA%B5ng/top-5-benh-vien-da-nang-uy-tin-chat-luong-1.png',
  },
  {
    id: 2,
    name: 'Bệnh viện Gia Đình Đà Nẵng',
    address: '73 Nguyễn Hữu Thọ, quận Hải Châu',
    image: 'https://cms.haivan.com/photos/b%E1%BB%87nh%20vi%E1%BB%87n%20%C4%91%C3%A0%20n%E1%BA%B5ng/top-5-benh-vien-da-nang-uy-tin-chat-luong-2.jpg',
  },
  {
    id: 3,
    name: 'Bệnh viện Hoàn Mỹ Đà Nẵng',
    address: '291 Nguyễn Văn Linh, quận Thanh Khê',
    image: 'https://cms.haivan.com/photos/b%E1%BB%87nh%20vi%E1%BB%87n%20%C4%91%C3%A0%20n%E1%BA%B5ng/top-5-benh-vien-da-nang-uy-tin-chat-luong-3.jpg',
  },
  {
    id: 4,
    name: 'Bệnh viện Y học cổ truyền Đà Nẵng',
    address: '342 Phan Châu Trinh, quận Hải Châu',
    image: 'https://cms.haivan.com/photos/b%E1%BB%87nh%20vi%E1%BB%87n%20%C4%91%C3%A0%20n%E1%BA%B5ng/top-5-benh-vien-da-nang-uy-tin-chat-luong-4.jpg',
  },

]
export const RenderHeaderFlatlist = () => {
  const navigation = useNavigation();
  const NavigationSymptom = () => {
    navigation.navigate('voice')
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerService}>
        <ServiceItem nameService={'Đặt lịch khám'} nameIcon={'calendar-clock-outline'} nameNavigation={NavigationSymptom} />
        <ServiceItem nameService={'Khám định kỳ'} nameIcon={'progress-clock'} nameNavigation={null} />
      </View>
      <View style={styles.containerService}>
        <ServiceItem nameService={'Hồ sơ cá nhân'} nameIcon={'account-box-multiple-outline'} nameNavigation={null} />
        <ServiceItem nameService={'Đặt lịch khám'} nameIcon={'card-bulleted-outline'} nameNavigation={null} />
      </View>
      <View><Text style={styles.title}>Bệnh viện nổi bật nhất</Text></View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderHospital item={item} />}
          horizontal>

        </FlatList>
      </View>
      <View><Text style={styles.title}>Tin tức mới nhất</Text></View>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },


    containerService: {
      flexDirection: 'row',
      marginBottom: 20
    },
    containeritemService1: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    containeritemService2: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 20,
      fontSize: 15
    },
    nameService: {
      color: 'black'
    }
  }
)