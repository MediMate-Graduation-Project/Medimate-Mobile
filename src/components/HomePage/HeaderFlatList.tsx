import React from "react"
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Hospitals } from "./Hospitals";
import { useNavigation } from "@react-navigation/native";
import { ServiceItem } from "./ServiceItem";
import { stylesHeaderFlatlist } from "../../styles/Home";
import { useGetAllHospital } from "../../hooks/useHospital";
import { page } from "../../constants";
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
export const HeaderFlatList = () => {
  const navigation = useNavigation();
  const NavigationSymptom = () => {
    navigation.navigate(page.voice)
  }
  const NavigationListHospital = () => {
    navigation.navigate(page.hospitalList)}

    const hospitalList = useGetAllHospital();
    const bestHospital = hospitalList.data?.sort((a, b) => b.averageRating - a.averageRating);
  return (
    <View style={stylesHeaderFlatlist.container}>
      <View style={stylesHeaderFlatlist.containerService}>
        <ServiceItem name={'Đặt lịch khám'} icon={'calendar-clock-outline'} navigation={NavigationSymptom} />
        <ServiceItem name={'Khám định kỳ'} icon={'progress-clock'} navigation={null} />
      </View>
      <View style={stylesHeaderFlatlist.containerService}>
        <ServiceItem name={'Hồ sơ cá nhân'} icon={'account-box-multiple-outline'} navigation={null} />
        <ServiceItem name={'Bảo hiểm y tế'} icon={'card-bulleted-outline'} navigation={null} />
      </View>
      <View><Text style={stylesHeaderFlatlist.title}>Bệnh viện nổi bật nhất</Text></View>
      <View>
        <FlatList
          data={bestHospital}
          renderItem={({ item }) => <Hospitals item={item} />}
          horizontal>

        </FlatList>
      </View>
      <View><Text style={stylesHeaderFlatlist.title}>Tin tức mới nhất</Text></View>
    </View>
  )
}
