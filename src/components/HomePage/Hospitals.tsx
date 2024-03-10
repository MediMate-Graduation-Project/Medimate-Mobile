import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Stars from 'react-native-stars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {stylesRenderHospital} from '../../styles/Home';
import {useNavigation} from '@react-navigation/native';
import {useGetAllHospital} from '../../hooks/useHospital';
import { page } from '../../constants';
export const Hospitals = ({item}: any) => {
  const navigation = useNavigation();

  return (
    <View style={stylesRenderHospital.container}>
      <View style={stylesRenderHospital.containerInfor}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(page.detail, {id: item.id});
          }}>
          <Text style={stylesRenderHospital.name}>{item.hospitalName}</Text>
          <View style={stylesRenderHospital.containeritemInfor}>
            <Image
              width={100}
              height={100}
              style={{objectFit: 'scale-down'}}
              source={{uri: item.image}}
            />
            <View style={stylesRenderHospital.itemInfor}>
              <Text style={stylesRenderHospital.address}>{item.address}</Text>
              <View style={stylesRenderHospital.star}>
                <Stars
                  display={2}
                  spacing={8}
                  count={item.averageRating}
                  starSize={40}
                  fullStar={
                    <MaterialCommunityIcons
                      size={20}
                      color={'yellow'}
                      name="star"></MaterialCommunityIcons>
                  }
                  emptyStar={
                    <MaterialCommunityIcons
                      size={20}
                      color={'yellow'}
                      name="star-half-full"></MaterialCommunityIcons>
                  }
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
