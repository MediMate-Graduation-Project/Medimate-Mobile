import { FlatList, Image, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RenderHospital } from '../components/HomePage/RenderHospital';
import { RenderHeaderFlatlist } from '../components/HomePage/RenderHeaderFlastlist';
import { RenderNews } from '../components/HomePage/RenderNews';
export const HomePage = () => {

  const dataNews = [
    {
      id: 1,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_30/doi-dac-nhiem-1-5946.jpg.webp',
      namenews: 'Đà Nẵng: Nhiều trường hợp đa chấn thương do pháo nổ nhập viện cấp cứu'
    },
    {
      id: 2,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2024_01_11/bn-t-5333.jpg.webp',
      namenews: 'Cứu sống bệnh nhân bị đứt lìa phế quản gốc của phổi trái'
    },
    {
      id: 3,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_12_07/u1-9459.jpg.webp',
      namenews: 'Nhiều khoa xét nghiệm của Bệnh viện Đà Nẵng đạt chuẩn ISO 15189:2012'
    },
    {
      id: 4,
      image: 'https://image.nhandan.vn/350x234/Uploaded/2024/cvjntciwxpcwspd/2023_11_03/1a-1094.jpg.webp',
      namenews: 'Vụ nổ tại nhà máy đóng tàu Dung Quất: 3 bệnh nhân nguy kịch'
    }
  ]
  return (
    // <View>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     style={styles.container}>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    //  </TouchableWithoutFeedback>
    //</KeyboardAvoidingView>
    //</View>
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons size={30} color={'#30A2FF'} name='magnify' ></MaterialCommunityIcons>
        <TextInput style={styles.Input} placeholderTextColor={'#30A2FF'} placeholder='Tìm kiếm bệnh viện'></TextInput>
      </View>
      <FlatList
        data={dataNews}
        ListHeaderComponent={RenderHeaderFlatlist}
        renderItem={RenderNews}
        style={styles.Flatlist}
      >
      </FlatList>
    </View>


  );
};
const styles = StyleSheet.create(
  {
    container:{
      backgroundColor:'white'
    },
    searchBar: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#30A2FF',
      margin: 20,
      height: 60,
      alignItems: 'center'
    },
    Input: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    Flatlist:{
      marginBottom:100
    }
  }
)