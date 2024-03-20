import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { mainColor } from '../common/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAllHospital } from '../api/Hospital';
import { useGetAllHospital } from '../hooks/useHospital';
import { Image } from 'react-native';
import { ChatFlatlist } from '../components/ChatFlatlist';

export const ChatPage = () => {
  const hospitalData = useGetAllHospital();
  console.log('allHospital', hospitalData.data[0].image);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <MaterialCommunityIcons name='magnify' size={20} color={mainColor}></MaterialCommunityIcons>
        <TextInput
          placeholder='Tìm kiếm tin nhắn'
        >

        </TextInput>
      </View>
      <FlatList
            data={hospitalData.data}
            renderItem={({ item }) => <Image style={styles.imageHospital} source={{ uri: item.image }}></Image>}
            horizontal
  
      >
      </FlatList>
      <FlatList
        data={hospitalData.data}
      
        renderItem={ChatFlatlist}>

      </FlatList>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerInput: {
    borderWidth: 1,
    borderColor: mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderRadius: 15,
    padding:5
  },
  imageHospital: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    marginBottom:50
  }
})