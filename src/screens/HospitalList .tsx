import Card from '../components/Card.jsx';
import React from 'react';
import {useGetAllHospital} from '../hooks/useHospital.jsx';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize';
import { mainColor } from '../common/colors.ts';

export const HospitalList  = () => {
  const hospitalList = useGetAllHospital();
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText}>
          99 Tô Hiến Thành, Phước Mỹ, Sơn Trà
        </TextInput>
        <MaterialCommunityIcons
          name="map-marker"
          size={30}
          color={mainColor}></MaterialCommunityIcons>
      </View>
      {/* <Modalize alwaysOpen={650}> */}
        <ScrollView style={styles.listView}>
          {hospitalList.data?.map((item: any) => (
            <Card key={item.id} id={item.id} />
          ))}
        </ScrollView>
      {/* </Modalize> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 5,
    flex: 1,
  },
  inputView: {
    borderWidth: 2,
    borderColor: mainColor,
    width: 305,
    height: 45,
    borderRadius: 60,
    paddingHorizontal: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 14,
    fontWeight: '700',
    color: mainColor,
  },
  listView: {
    marginTop: 20,
  },
});