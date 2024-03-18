import React, { useEffect, useState } from 'react';
import {useGetAllHospital} from '../hooks/useHospital.jsx';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modalize} from 'react-native-modalize';
import { mainColor } from '../common/colors.ts';
import Card from '../components/Card.jsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const HospitalList  = ({route}: {route: any}) => {
  const {lat,lon,nameAddress}=route.params;
  const [dataHospital,setData]=useState();

  useEffect(()=>{
     const handleGetNearHospital=async()=>{
           const res=await axios.get(`https://medimate-be.onrender.com/hospitals/map?lat=${lat}&lon=${lon}`)
           setData(res.data)
     }
     handleGetNearHospital();
  },[])
  
  
  console.log('lat',lat);
  console.log('long',lon);
  
  console.log('list',dataHospital);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText}
        multiline
        numberOfLines={4}
        maxLength={400}
        >
         {nameAddress}
      
        </TextInput>
        <MaterialCommunityIcons
          name="map-marker"
          size={30}
          color={mainColor}></MaterialCommunityIcons>
      </View>
      {/* <Modalize alwaysOpen={650}> */}
        <ScrollView style={styles.listView}>
          {dataHospital?.map((item: any) => (
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
    width: 340,
    height: 75,
    borderRadius: 30,
    paddingHorizontal: 30,
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
